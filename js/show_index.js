const canvas = document.getElementById("mycanvas")
const ctx = canvas.getContext("2d")

const PI = Math.PI
const PI2 = Math.PI*2

const blockWidth = 500

// const zodiacList = require("./zodiac_ani_items.js")
// console.log(zodiacList)

const color = {
	red: "#F74456",
	white: "#fff",
	yellow: "#F1DA56",
	blue: "#036FAF" 
}




$(function() {  // ready寫法

// debugger;

    // const container = document.getElementById("p1")
    const data = $(".p1").text()
    const data2 = $(".p2").text()

	
	$(".p1").text("")
	$(".p2").text("")


	$(".st1").hide()
	$(".st2").hide()
	$(".st1").fadeIn(2000)
	
	
	// $(".star").hide()
	$(".scor").hide()
	$("canvas").hide()
	$("canvas").fadeIn(1500)


	// canvas

	canvas.width = blockWidth*2
	canvas.height = blockWidth*2/10*7 // 本來是一倍 

	draw2( $('.zodiac').text() );

    let index = 0
    let timertxt = null
    let content = ""

    setTimeout(()=>{
        function writing() {
            if (index < data.length) {
                content += data[index ++]
                $(".p1").html(content)
            } else {
                clearInterval(timertxt)
                setTimeout(()=>{
                    $(".st2").fadeIn(2000)
                    index = 0
                    timertxt = null
                    content = ""
                    setTimeout(()=>{
                        function writing2(){
                            if(index < data2.length){
                                content += data2[index ++]
                                $(".p2").html(content)
                            }else{
                                clearInterval(timertxt2)
                            }
                            // console.log(timertxt2)
                        }
                        timertxt2 = setInterval(writing2, 30)
                    },1300)
                },100)
            }
        //   console.log(timer)
        }
        timertxt = setInterval(writing, 30)
    },1300)
})


function drawBlock(draw){
    ctx.save()
    // ctx.clearRect(0,0,1000,700)
    ctx.translate(0,0)
    // ctx.fillStyle = `rgba(255, 0, 0, ${r_a})`; 
    // ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.translate(500,250)
    ctx.fillStyle = color.yellow
    
    draw()
    ctx.restore()
}

function drawline(x,y,deg,timer){
    ctx.save()
    ctx.translate(x,y)
    ctx.rotate(PI/180*deg)
    ctx.fillRect(0,0,3,timer)
    ctx.restore() 
}

ctx.drawcir = function(x,y){
    ctx.save()
    this.beginPath()
    ctx.translate(x,y)
    ctx.fillStyle = "rgba(34, 34, 34, 1)"
    ctx.arc(0,0,20,0,PI2)
    ctx.fill()
    this.beginPath()
    ctx.fillStyle = `rgba(229, 229, 229, 1)`
    ctx.arc(0,0,11,0,PI2)
    ctx.fill()
    ctx.restore()
}


function draw_star(x,y){
    let stime1=0
    let st1 = setInterval(()=>{
        stime1 ++
        drawBlock(function(){
            ctx.drawcir(x,y)
        })
        // console.log("stime1:"+stime1)
    },20)
    setTimeout(()=>{
        clearInterval(st1)
    },7000)
    // console.log(st1)
    
}
// draw_line(stars[0],stars[1])

function draw2() {
	// let stars = zodiacList[zo].stars;
	// let lines = zodiacList[zo].lines;
	let stars = JSON.parse( stars_json );
	let lines = JSON.parse( lines_json );
	for(let star of stars) {
		setTimeout(()=>{ draw_star(star.x,star.y); }, 0)
	}
	for(let line of lines) {
		let arrid1 = stars.find((i,n)=>{   // filter 會回傳 json     find 會回傳 物件
			return (stars[n].id == line.id_from)
		})
		let arrid2 = stars.find((i,n)=>{
			return (stars[n].id == line.id_to)
		})		
		
		setTimeout(()=>{ draw_line(arrid1, arrid2); }, line.begin_ms + 300)
	}
    setTimeout(()=>{
        $(".scor").fadeIn(2000)
    },3000)
    setTimeout(()=>{
        $("canvas").fadeOut(1000)
    },4000)
}


function draw_line( arrid1, arrid2 ) {
    let x1 = arrid2.x;
	let y1 = arrid2.y;
    let x2 = arrid1.x;
	let y2 = arrid1.y;
    
	ctx.lineCap = "round";

    // variable to hold how many frames have elapsed in the animation
    var t = 1;

    // define the path to plot
    var vertices = [];
    vertices.push({
        x: x1,
        y: y1
    });
    vertices.push({
        x: x2,
        y: y2
    });

    // draw the complete line
    ctx.lineWidth = 1;
    // tell canvas you are beginning a new path
    ctx.beginPath();
    // draw the path with moveTo and multiple lineTo's
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    // stroke the path
    // ctx.stroke();

    // set some style
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(225,225,0,0.8)";
    // calculate incremental points along the path
    var points = calcWaypoints(vertices);
    // extend the line from start to finish with animation
    animate(points);


    // calc waypoints traveling along vertices
    function calcWaypoints(vertices) {
        var waypoints = [];
        for (var i = 1; i < vertices.length; i++) {
            var pt0 = vertices[i - 1];
            var pt1 = vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < 100; j++) {
                var x = pt0.x + dx * j / 100;
                var y = pt0.y + dy * j / 100;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (waypoints);
    }


    function animate() {
        if (t < points.length - 1) {
            requestAnimationFrame(animate);
        }
        // draw a line segment from the last waypoint
        // to the current waypoint
        ctx.save()
        ctx.translate(500,250)
        ctx.beginPath();
        ctx.moveTo(points[t - 1].x, points[t - 1].y);
        ctx.lineTo(points[t].x, points[t].y);
        ctx.stroke();
        ctx.restore()
        // increment "t" to get the next waypoint
        t+=2;
    }
	
}

// exit 導回頁面
$(".exit").click(()=>{
    let source = "/"
    window.open(source,"_self")
})


