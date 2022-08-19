
for(let i=0;i<6;i++){
    $(`.q${i}`).hover(function(){
        $(`.l${i}`).css("transform","scaleX(0.7)")
    })
    
    $(`.q${i}`).mouseleave(function(){
        let x = "scaleX(0.2)"

        if($(`.Q${i}`).is(":focus")){
            x = "scaleX(0.7)"
        }
        let Q_val = $(`.Q${i}`).val()
        if(i!=1){
            if(Q_val != ""){
                x = "scaleX(0.7)"
            }            
        }else{
            if($(".rdcss").is(":checked")){
                x = "scaleX(0.7)"
                $(".radioBox").css("backgroundColor","rgba(46,193,46,0.2)")
            }
        }
        
        $(`.l${i}`).css("transform",x)
    })
    
    $(`.Q${i}`).focus(function(){
        $(`.l${i}`).css("transform ","scaleX(0.7)")
    })
    
    $(`.Q${i}`).blur(function(){
        let Q_val = $(`.Q${i}`).val()
        if(Q_val != ""){
            $(`.l${i}`).css("transform","scaleX(0.7)")  
        }else{
            $(`.l${i}`).css("transform","scaleX(0.2)")
        }
    })
    // $(".rdcss").click(function(){
    //     $(".radioBox").css("backgroundColor","rgba(46,193,46,0.2)")
    // })

}

let password = []
let subArray = [0,0,0,0,0,0]


$(`.Q0`).blur(function(){
    let Q_val = $(`.Q0`).val()
    if(Q_val.length>0){
        if(/^[\u4e00-\u9fa5_a-zA-Z]{2,10}$/.test(Q_val)){
            $(`.Q0`).css("backgroundColor","rgba(46,193,46,0.2)")
            subArray[0] = 1
        }else{
            $(`.Q0`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[0] = 0
        }
          
    }else{
        subArray[0] = 0
        $(`.Q0`).css("backgroundColor","#222")
        setTimeout(()=>{
            $(`.Q0`).focus(function(){
                $(`.Q0`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }
})

/*
$(`.Q1`).blur(function(){
    let Q_val = $(`.Q1`).val()
    if(Q_val.length>0){
        if( Q_val != "男" && Q_val != "女"){
            $(`.Q1`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[1] = 0
        }else{
            $(`.Q1`).css("backgroundColor","rgba(46,193,46,0.2)")
            subArray[1] = 1
        }
          
    }else{
        subArray[1] = 0
        $(`.Q1`).css("backgroundColor","#222")
        setTimeout(()=>{
            $(`.Q1`).focus(function(){
                $(`.Q1`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }
})
*/

$(`.Q2`).blur(function(){
    let Q_val = $(`.Q2`).val()
    if(Q_val.length>0){
        if(/^(19|20)\d{2}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/.test(Q_val)){
            $(`.Q2`).css("backgroundColor","rgba(46,193,46,0.2)")
            subArray[2] = 1
        }else{
            $(`.Q2`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[2] = 0
        }
    }else{
        subArray[2] = 0
        $(`.Q2`).css("backgroundColor","#222")
        setTimeout(()=>{
            $(`.Q2`).focus(function(){
                $(`.Q2`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }
})

$(`.Q3`).blur(function(){
    let Q_val = $(`.Q3`).val()
    if(Q_val.length>0){
        if(/^(09)\d{8}$/.test(Q_val)){
            $(`.Q3`).css("backgroundColor","rgba(46,193,46,0.2)")
            subArray[3] = 1
        }else{
            $(`.Q3`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[3] = 0
        }
    }else{
        subArray[3] = 0
        $(`.Q3`).css("backgroundColor","#222")
        setTimeout(()=>{
            $(`.Q3`).focus(function(){
                $(`.Q3`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }
})

$(`.Q4`).blur(function(){
    let Q_val = $(`.Q4`).val()
    if(Q_val.length>0){
        if(/^.*(?=.{6,9}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(Q_val)){
            $(`.Q4`).css("backgroundColor","rgba(46,193,46,0.2)")
            password[0] = Q_val
            subArray[4] = 1
        }else{
            $(`.Q4`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[4] = 0
        }
    }else{
        $(`.Q4`).css("backgroundColor","#222")
        setTimeout(()=>{
            subArray[4] = 0
            $(`.Q4`).focus(function(){
                $(`.Q4`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }
    console.log(password)
})

$(`.Q5`).blur(function(){
    let Q_val = $(`.Q5`).val()
    if(Q_val.length>0){
        if(Q_val === password[0]){
            $(`.Q5`).css("backgroundColor","rgba(46,193,46,0.2)")
            subArray[5] = 1
        }else{
            $(`.Q5`).css("backgroundColor","rgba(255,50,50,0.2)")
            subArray[5] = 0
        }
    }else{
        subArray[5] = 0
        $(`.Q5`).css("backgroundColor","#222")
        setTimeout(()=>{
            $(`.Q5`).focus(function(){
                $(`.Q5`).css("backgroundColor","rgba(153, 153, 153,0.1)")
            })
        },100)
    }console.log(subArray)
})


function register_new(){
	let args = {}
	$('input').each( (i,o) => {
		args[o.name] = o.value;
	})
	
	// radio input 取值的方式 寫在下方可以直接覆蓋上方的資料
	args['gender'] = $('input[name="gender"]:checked').val()
	
	// 這邊使用 json 後的資料比較好用
	$.ajax( {url:'/register_new', type:'post', data: args, dataType:'json' }).done( function(data){  // done 是做完後跑的callback	
		if (data.result == 'OK') {
			alert("註冊成功!")
			window.location.href = "/main"
		} else {
			$(".caution").html(data.result).css("opacity","0.9")
			if (data.field) {
				$('input[name="' + data.field +'"').focus();
			}
			setTimeout(()=>{
					$(".caution").css("opacity","0")
				},1600);
		}
	})
}; 

// $('form').submit(function(event) {
    // if(subArray.every((i) => i===1)){
        // // event.Default();
		// return true
    // }else{ 
        // event.preventDefault();
        // // window.history.back();
        // $(".caution").css("opacity","1")
        // $("button").css("pointerEvents","none")
        // setTimeout(()=>{
            // $(".caution").css("opacity","0")
            // $("button").css("pointerEvents","auto")
        // },1500)
		// return false
    // }
// });






// exit 導回頁面
$(".exit").click(()=>{
    let source = "/"
    window.open(source,"_self")
})

