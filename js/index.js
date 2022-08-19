const PI2 = Math.PI*2
let x = 0
let y = 0
let x1 = 0

const scro = document.documentElement;
const aries = document.documentElement;
const sag = document.documentElement;
const aquar = document.documentElement;
const pisces = document.documentElement;
const virgo = document.documentElement;

$(function() {  // ready寫法
	// 網頁載入完成後 自動執行的程式放這裡面 若是操作後的不需要
	
	
	$('button[name="go"]').bind('click', ()=>{  // bind 綁定 也可以寫on   unbind可以取消bind (如果有兩個以上的話)
		args = {acc: $('input[name="acc"]').val() , password: $('input[name="password"]').val() }
		$.ajax({url:"/login", type:"post", data:args, dataType:"json"}).done(function(data){
			if(data.result == "OK"){
				window.location.href = "/main"  // 用後端管控
			}else{
				$(".caution").html(data.result).css("opacity","0.9")
			setTimeout(()=>{
					$(".caution").css("opacity","0")
				},1600);
			}
		})
	})
	
	
	setInterval(() => {
		x++
		// console.log(x%360+1,x)
		scro.style.setProperty('--scr_ro', `${(x%36000/18)}deg`)
		aries.style.setProperty('--aries_ro', `${(x%36000/36)}deg`)
		sag.style.setProperty('--sag_ro', `-${(x%36000/72)}deg`)
		virgo.style.setProperty('--virgo_ro', `-${(x%36000/36)}deg`)

		if(x>72000){
		x = 0
		}
	}, 10);

	setTimeout(()=>{
		scro.style.setProperty('--scr_right', `${(Math.random()*20)}%`)
		scro.style.setProperty('--scr_top', `${(Math.random()*10)}%`)
		setInterval(()=>{
			scro.style.setProperty('--scr_right', `${(Math.random()*20)}%`)
			scro.style.setProperty('--scr_top', `${(Math.random()*10)}%`)
		},10000)
	},0)

	// aries
	setTimeout(()=>{
		aries.style.setProperty('--aries_left', `${(Math.random()*8+8)}%`)
		aries.style.setProperty('--aries_bottom', `${(Math.random()*7+5)}%`)
		setInterval(()=>{
			aries.style.setProperty('--aries_left', `${(Math.random()*8+8)}%`)
			aries.style.setProperty('--aries_bottom', `${(Math.random()*7+5)}%`)
		},10000)
	},3000)

	// sagi
	setTimeout(()=>{
		sag.style.setProperty('--sag_left', `${(Math.random()*10+3)}%`)
		sag.style.setProperty('--sag_top', `${(Math.random()*10+5)}%`)
		setInterval(()=>{
			sag.style.setProperty('--sag_left', `${(Math.random()*10+3)}%`)
			sag.style.setProperty('--sag_top', `${(Math.random()*10+5)}%`)
		},10000)
	},7000)

	// aquar
	setTimeout(()=>{
		aquar.style.setProperty('--aquar_right', `${(Math.random()*9+4)}%`)
		aquar.style.setProperty('--aquar_bottom', `${(Math.random()*7+5)}%`)
		setInterval(()=>{
			aquar.style.setProperty('--aquar_right', `${(Math.random()*9+4)}%`)
			aquar.style.setProperty('--aquar_bottom', `${(Math.random()*7+5)}%`)
		},10000)
	},9000)

	// pisces
	setTimeout(()=>{
		pisces.style.setProperty('--pisces_left', `${(Math.random()*8+18)}%`)
		pisces.style.setProperty('--pisces_top', `${(Math.random()*10+25)}%`)
		setInterval(()=>{
			pisces.style.setProperty('--pisces_left', `${(Math.random()*8+18)}%`)
			pisces.style.setProperty('--pisces_top', `${(Math.random()*10+25)}%`)
		},10000)
	},13000)

	// virgo
	setTimeout(()=>{
		virgo.style.setProperty('--virgo_right', `${(Math.random()*7+17)}%`)
		virgo.style.setProperty('--virgo_bottom', `${(Math.random()*8+32)}%`)
		setInterval(()=>{
			virgo.style.setProperty('--virgo_right', `${(Math.random()*7+17)}%`)
			virgo.style.setProperty('--virgo_bottom', `${(Math.random()*8+32)}%`)
		},10000)
	},15000)

})





