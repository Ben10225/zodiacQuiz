// nodemon --inspect=0.0.0.0:9229 server.js

const express = require("express")
const bodyParser = require('body-parser');
const crypto = require("crypto")
const path = require("path")
const fs = require("fs")
const PORT = process.env.PORT || 3001   // 每個port可以架一個網站

const sqlite3 = require('sqlite3');
const db_file = path.join( __dirname, 'zodiac.db') ;

const app = express()

const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(express.urlencoded({extended:false}));  // 方便抓 post 參數

app.use('/html', express.static( path.join(__dirname,  "html") ) );
app.use('/css', express.static( path.join(__dirname,  "css") ) );
app.use('/img', express.static( path.join(__dirname,  "img") ) );
app.use('/js', express.static( path.join(__dirname,  "js") ) );


app.get("/", function(req, res){
	res.redirect('html/')
	// let s = fs.readFileSync( path.join(__dirname,  "/html/index.html") ).toString();
	// res.send( s );
});

app.get("/main", function(req, res){
	let db = new sqlite3.Database( db_file );
	var cookies = parseCookies(req)
	let user_iid = cookies['user_iid']
	if(user_iid == null){
		res.redirect('html/')
	}
	let s = fs.readFileSync( path.join(__dirname,  "/html/show_page.html") ).toString();
	let cmd = `SELECT U.name, F.*, I.stars, I.lines
				FROM user_info AS U 
					INNER JOIN feature AS F ON U.gender = F.gender AND SUBSTR(U.birthday,-5) BETWEEN F.birthday_from AND F.birthday_to
							AND (strftime('%Y', 'now') - strftime('%Y', U.birthday)) BETWEEN F.age_b AND F.age_e
					INNER JOIN zodiac_images AS I ON F.zodiac = I.name
				WHERE U.iid = ?`;
	db.get( cmd, user_iid, (err, row) => {
		if (err) res.send( err.toString() );
		if (row == null) res.send( '尚無此星座資料' );
		for(let fld in row) {
			if (s.includes('>' + fld + '<')) {
				if (fld == 'gender') row[fld] += (row.age_b == 0 ? '孩' : '人');
				s = s.replace('>' + fld + '<', '>' + row[fld] + '<');
				s = s.replace( 'var stars_json;', 'var stars_json=\'' + row.stars + '\'')
				s = s.replace( 'var lines_json;', 'var lines_json=\'' + row.lines + '\'')
			}
		}
		s = s.replace("/image.svg", "/"+row["image"])
		res.send( s );
	})
	
})

app.post("/login", function(req, res){
	let db = new sqlite3.Database( db_file );
	let pw = sha256(req.body.password)
	let cmd = 'SELECT iid, password FROM user_info WHERE phone=?';
	db.get( cmd, req.body.acc, (err,row)=>{
		if (err) return res.json({result: err.toString()})
		if (row == null) return res.json({result: '此手機尚未註冊，請前往註冊 !'})
		if (row.password != pw) return res.json({result: '密碼不符!'})
		
		let options = {
			maxAge: 1000 * 60 * 15, // would expire after 15 minutes
			httpOnly: true, // The cookie only accessible by the web server
			signed: true // Indicates if the cookie should be signed
		}
		
		res.cookie('user_iid', row.iid) // options is optional
		return res.json({result: 'OK'})
	})
})


// req.body 內容是 {
    // "name": "bb",
    // "gender": "ss",
    // "bir": "",
    // "acc": "",
    // "password": "",
    // "chkpassword": ""
// }

app.post("/register_new", function(req, res){
	if (!( /^[\u4e00-\u9fa5_a-zA-Z]{2,10}$/.test(req.body.name) )) {
		return res.json( {result: '姓名格式不符(2-10個字)', field: 'name' })  // 因為 json 來 所以傳 json 回去
	}
	if (!["男","女"].includes( req.body.gender )) {
		return res.json( {result: '請勾選性別', field: 'gender' })
	}
	if (!/^(19|20)\d{2}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/.test( req.body.bir )) {
		return res.json( {result: '日期格式不符', field: 'bir' })
	}
	if (!/^(09)\d{8}$/.test( req.body.acc )) {
		return res.json( {result: '手機格式不符(09..)', field: 'acc' })
	}
	if (!/^.*(?=.{6,9}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test( req.body.password )) {
		return res.json( {result: '密碼格式不符(6-9個英數字混和)', field: 'password' })
	}
	if (req.body.password !== req.body.chkpassword ) {
		return res.json( {result: '確認密碼有誤', field: 'chkpassword' })
	}
	let cmd = "INSERT INTO user_info (name, gender, birthday, phone, password) VALUES( ?,?,?,?,? )";
	let db = new sqlite3.Database( db_file );
	let pw = sha256(req.body.password)
	db.run( cmd, [req.body.name, req.body.gender, req.body.bir, req.body.acc, pw], function(err) {
		if (err) {
			if (err.toString().includes('UNIQUE')) {
				return res.json({result: '此電話號碼已經註冊過了，無法重新註冊'})
			}
			return res.json({result: err.toString()})
		}
		res.cookie('user_iid', this.lastID) // options is optional
		return res.json({result: "OK" })
	})
	
})




app.listen(PORT, ()=>{
	console.log(`Server running on port ${PORT}`)
})



function sha256(data){
	const hash = crypto.createHash('sha256');
	return hash.update(data).digest('hex');
}

function parseCookies(req) {
	let list = {};
	if (req && req.headers) {
		let rc = req.headers.cookie;
		let parts;

		rc && rc.split(';').forEach(function( cookie ) {
			parts = cookie.split('=');
			list[parts.shift().trim()] = decodeURI(parts.join('='));
		});

		if (list.key != null){
			this.set_key(  this.decrypt( decodeURIComponent(list.key) ) );
		}
	}
	return list;
}

// 影像變成url的文字 用來顯示圖檔
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}