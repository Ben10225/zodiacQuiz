const zodiacList = {
	'天蠍座' : {
		stars: [ {id:'1', x:-9, y:247, begin_ms: 500 },
                {id:'2_l', x:-110, y:180, begin_ms: 1000 }, 
                {id:'2_r', x:31, y:360, begin_ms: 1000 }, 
                {id:'3_l', x:-229, y:90, begin_ms: 1500 }, 
                {id:'3_r', x:171, y:350, begin_ms: 1500 }, 
                {id:'4_lr', x:-99, y:50, begin_ms: 2000 }, 
                {id:'4_ll', x:-279, y:210, begin_ms: 2000 }, 
                {id:'4_r', x:310, y:320, begin_ms: 2000 },
                {id:'5_l', x:-369, y:110, begin_ms: 2500 },
                {id:'5_r', x:401, y:240, begin_ms: 2500 },
                {id:'6_r', x:431, y:150, begin_ms: 3000 },
                {id:'7_r', x:371, y:40, begin_ms: 3500 }
			],
		lines: [
                {id_from:"2_l", id_to:"1", begin_ms:1000},
                {id_from:"2_r", id_to:"1", begin_ms:1000},
                {id_from:"3_l", id_to:"2_l", begin_ms:1500},
                {id_from:"3_r", id_to:"2_r", begin_ms:1500},
                {id_from:"4_lr", id_to:"3_l", begin_ms:2000},
                {id_from:"4_ll", id_to:"3_l", begin_ms:2000},
                {id_from:"4_r", id_to:"3_r", begin_ms:2000},
                {id_from:"5_l", id_to:"4_ll", begin_ms:2500},
                {id_from:"5_r", id_to:"4_r", begin_ms:2500},
                {id_from:"6_r", id_to:"5_r", begin_ms:3000},
                {id_from:"7_r", id_to:"6_r", begin_ms:3500}
			],
	},
	'射手座' : {
		stars: [ {id:'1', x:-159, y:340, begin_ms: 300 },
                {id:'2', x:-70, y:220, begin_ms: 600 }, 
                {id:'3_t', x:-70, y:100, begin_ms: 900 }, 
                {id:'3_r', x:50, y:180, begin_ms: 900 }, 
                {id:'4_rt', x:110, y:130, begin_ms: 1200 }, 
                {id:'4_rb', x:70, y:250, begin_ms: 1200 }, 
                {id:'4_tl', x:-180, y:50, begin_ms: 1200 }, 
                {id:'4_tt', x:0, y:-20, begin_ms: 1200 }, 
                {id:'5_ttl', x:-100, y:-150, begin_ms: 1500 }, 
                {id:'5_r', x:150, y:190, begin_ms: 1500 }, 
                {id:'6_r', x:270, y:240, begin_ms: 1800 }, 
                {id:'6_b', x:150, y:320, begin_ms: 1800 }, 
                {id:'7_r', x:370, y:180, begin_ms: 2100 }, 
                {id:'7_b', x:200, y:360, begin_ms: 2100 }, 
                {id:'8_r', x:350, y:-50, begin_ms: 2400 }, 
                {id:'8_b', x:230, y:425, begin_ms: 2400 }, 
                {id:'9_r', x:280, y:-180, begin_ms: 2700 }, 
                {id:'10_rt', x:160, y:-220, begin_ms: 3000 }, 
                {id:'10_rb', x:200, y:-120, begin_ms: 3000 }
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:500},
                {id_from:"3_t", id_to:"2", begin_ms:800},
                {id_from:"3_r", id_to:"2", begin_ms:800},
                {id_from:"4_tl", id_to:"3_t", begin_ms:1100},
                {id_from:"4_tt", id_to:"3_t", begin_ms:1100},
                {id_from:"4_rt", id_to:"3_r", begin_ms:1100},
                {id_from:"4_rb", id_to:"3_r", begin_ms:1100},
                {id_from:"5_ttl", id_to:"4_tt", begin_ms:1400},
                {id_from:"5_r", id_to:"4_rt", begin_ms:1700},
                {id_from:"5_r", id_to:"4_rb", begin_ms:1700},
                {id_from:"6_r", id_to:"5_r", begin_ms:2000},
                {id_from:"6_b", id_to:"5_r", begin_ms:2000},
                {id_from:"7_r", id_to:"6_r", begin_ms:2300},
                {id_from:"7_b", id_to:"6_b", begin_ms:2300},
                {id_from:"8_r", id_to:"7_r", begin_ms:2600},
                {id_from:"8_b", id_to:"7_b", begin_ms:2600},
                {id_from:"9_r", id_to:"8_r", begin_ms:3000},
                {id_from:"9_r", id_to:"8_r", begin_ms:3000},
                {id_from:"10_rt", id_to:"9_r", begin_ms:3400},
                {id_from:"10_rb", id_to:"9_r", begin_ms:3400}

			],
	},
	'摩羯座' : {
		stars: [ {id:'1', x:-95, y:25, begin_ms: 300 },
                {id:'2_r', x:20, y:10, begin_ms: 300 },
                {id:'2_l', x:-230, y:30, begin_ms: 600 }, 
                {id:'3_l', x:-310, y:15, begin_ms: 600 }, 
                {id:'4_l', x:-200, y:200, begin_ms: 1200 },
                {id:'5_l', x:-160, y:250, begin_ms: 1200 },
                {id:'6_l', x:-5, y:330, begin_ms: 1200 },

                {id:'3_r', x:360, y:-80, begin_ms: 600 }, 
                {id:'4_rt', x:380, y:-150, begin_ms: 600 }, 
                {id:'4_rb', x:320, y:15, begin_ms: 1200 },
                {id:'5_r', x:200, y:320, begin_ms: 1200 },
                
                {id:'7', x:140, y:400, begin_ms: 1200 }
			],
		lines: [
                {id_from:"2_l", id_to:"1", begin_ms:400},
                {id_from:"2_r", id_to:"1", begin_ms:600},
                {id_from:"3_r", id_to:"2_r", begin_ms:1200},
                {id_from:"3_l", id_to:"2_l", begin_ms:900},
                {id_from:"4_l", id_to:"3_l", begin_ms:1400},
                {id_from:"5_l", id_to:"4_l", begin_ms:1900},
                {id_from:"6_l", id_to:"5_l", begin_ms:2400},

                {id_from:"4_rt", id_to:"3_r", begin_ms:1800},
                {id_from:"4_rb", id_to:"3_r", begin_ms:2100},
                {id_from:"5_r", id_to:"4_rb", begin_ms:2600},

                {id_from:"7", id_to:"5_r", begin_ms:3500},
                {id_from:"7", id_to:"6_l", begin_ms:3000}
			],
	},
	'水瓶座' : {
		stars: [ {id:'1', x:-49, y:-200, begin_ms: 300 },
                {id:'2', x:30, y:-140, begin_ms: 600 }, 
                {id:'3', x:90, y:-100, begin_ms: 900 }, 
                {id:'4', x:200, y:-120, begin_ms: 900 }, 
                {id:'5', x:300, y:-40, begin_ms: 1200 }, 
                {id:'6', x:320, y:20, begin_ms: 1200 }, 
                {id:'7', x:280, y:50, begin_ms: 1200 }, 
                {id:'8', x:270, y:150, begin_ms: 1200 }, 
                {id:'9_b', x:160, y:270, begin_ms: 1200 }, 
                {id:'9_l', x:110, y:150, begin_ms: 1200 }, 
                {id:'10_b', x:80, y:430, begin_ms: 1200 }, 
                {id:'10_l', x:-10, y:290, begin_ms: 1200 }
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:500},
                {id_from:"3", id_to:"2", begin_ms:1000},
                {id_from:"4", id_to:"3", begin_ms:1500},
                {id_from:"5", id_to:"4", begin_ms:2000},
                {id_from:"6", id_to:"5", begin_ms:2100},
                {id_from:"7", id_to:"6", begin_ms:2200},
                {id_from:"8", id_to:"7", begin_ms:2500},
                {id_from:"9_b", id_to:"8", begin_ms:3000},
                {id_from:"9_l", id_to:"8", begin_ms:3000},
                {id_from:"10_b", id_to:"9_b", begin_ms:3500},
                {id_from:"10_l", id_to:"9_l", begin_ms:3500}
			],
	},
	'雙魚座' : {
		stars: [ {id:'1_t', x:83, y:-230, begin_ms: 300 },
                {id:'1_l', x:-300, y:350, begin_ms: 300 },
                {id:'2_t', x:130, y:-150, begin_ms: 600 }, 
                {id:'2_l', x:-250, y:360, begin_ms: 300 },
                {id:'3_tr', x:170, y:-86, begin_ms: 900 },
                {id:'3_l', x:-180, y:330, begin_ms: 300 },
                {id:'3_tl', x:90, y:-100, begin_ms: 900 }, 
                {id:'4_tr', x:160, y:-26, begin_ms: 900 }, 
                {id:'4_tl', x:70, y:-45, begin_ms: 900 }, 
                {id:'4_l', x:-110, y:350, begin_ms: 300 },
                {id:'5_t', x:100, y:30, begin_ms: 1200 }, 
                {id:'5_l', x:0, y:390, begin_ms: 300 },
                {id:'6_t', x:150, y:180, begin_ms: 1200 },
                {id:'6_l', x:100, y:400, begin_ms: 300 },
                {id:'7_t', x:155, y:240, begin_ms: 1200 }, 
                {id:'8_t', x:160, y:290, begin_ms: 1200 }, 
                {id:'9_t', x:190, y:350, begin_ms: 1200 }, 
                {id:'10_t', x:225, y:420, begin_ms: 1200 }
			],
		lines: [
                {id_from:"2_t", id_to:"1_t", begin_ms:500},
                {id_from:"3_tr", id_to:"2_t", begin_ms:900},
                {id_from:"3_tl", id_to:"2_t", begin_ms:900},
                {id_from:"4_tr", id_to:"3_tr", begin_ms:1200},
                {id_from:"4_tl", id_to:"3_tl", begin_ms:1200},
                {id_from:"5_t", id_to:"4_tr", begin_ms:1500},
                {id_from:"5_t", id_to:"4_tl", begin_ms:1500},
                {id_from:"2_l", id_to:"1_l", begin_ms:1600},
                {id_from:"6_t", id_to:"5_t", begin_ms:1800},
                {id_from:"3_l", id_to:"2_l", begin_ms:2000},
                {id_from:"7_t", id_to:"6_t", begin_ms:2200},
                {id_from:"4_l", id_to:"3_l", begin_ms:2300},
                {id_from:"8_t", id_to:"7_t", begin_ms:2500},
                {id_from:"5_l", id_to:"4_l", begin_ms:2600},
                {id_from:"9_t", id_to:"8_t", begin_ms:2800},
                {id_from:"6_l", id_to:"5_l", begin_ms:3000},
                {id_from:"10_t", id_to:"9_t", begin_ms:3200},
                {id_from:"10_t", id_to:"6_l", begin_ms:3300}
			],
	},
	'牡羊座' : {
		stars: [ {id:'1', x:3, y:-200, begin_ms: 300 },
                {id:'2', x:70, y:0, begin_ms: 600 }, 
                {id:'3', x:140, y:220, begin_ms: 900 },
                {id:'4', x:120, y:360, begin_ms: 900 }, 
                {id:'5', x:50, y:420, begin_ms: 900 }, 
                {id:'6', x:230, y:280, begin_ms: 1200 },
                {id:'7', x:-130, y:30, begin_ms: 1200 }, 
                {id:'8_t', x:-160, y:-100, begin_ms: 1200 }, 
                {id:'8_l', x:-230, y:30, begin_ms: 1200 }
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:500},
                {id_from:"3", id_to:"2", begin_ms:1000},
                {id_from:"4", id_to:"3", begin_ms:1500},
                {id_from:"5", id_to:"4", begin_ms:1700},
                {id_from:"3", id_to:"6", begin_ms:1800},
                {id_from:"7", id_to:"3", begin_ms:2500},
                {id_from:"8_t", id_to:"7", begin_ms:3300},
                {id_from:"8_l", id_to:"7", begin_ms:3300}
			],
	},
	'金牛座' : {
		stars: [ {id:'1_r', x:70, y:420, begin_ms: 300 },
                {id:'1_l', x:-120, y:330, begin_ms: 300 },
                {id:'2_r', x:170, y:370, begin_ms: 600 }, 
                {id:'2_l', x:-90, y:220, begin_ms: 600 }, 
                {id:'3', x:20, y:250, begin_ms: 900 },
                {id:'4', x:35, y:130, begin_ms: 900 }, 
                {id:'5_l', x:-35, y:30, begin_ms: 900 }, 
                {id:'5_r', x:110, y:-35, begin_ms: 1200 },
                {id:'6_l', x:-60, y:-210, begin_ms: 900 }, 
                {id:'6_r', x:140, y:-230, begin_ms: 1200 },
                
			],
		lines: [
                {id_from:"2_r", id_to:"1_r", begin_ms:200},
                {id_from:"2_l", id_to:"1_l", begin_ms:700},
                {id_from:"3", id_to:"2_r", begin_ms:800},
                {id_from:"3", id_to:"2_l", begin_ms:1200},
                {id_from:"4", id_to:"3", begin_ms:1700},
                {id_from:"5_r", id_to:"4", begin_ms:2500},
                {id_from:"5_l", id_to:"4", begin_ms:2300},
                {id_from:"6_r", id_to:"5_r", begin_ms:3400},
                {id_from:"6_l", id_to:"5_l", begin_ms:3000}
			],
	},
	'雙子座' : {
		stars: [ {id:'1_r', x:270, y:-70, begin_ms: 300 },
                {id:'1_l', x:-190, y:-100, begin_ms: 300 },
                {id:'2_r', x:110, y:-65, begin_ms: 600 }, 
                {id:'2_l', x:-60, y:-110, begin_ms: 600 }, 
                {id:'3_c', x:10, y:-75, begin_ms: 900 },
                {id:'4_lt', x:-80, y:-185, begin_ms: 900 }, 
                {id:'4_lr', x:65, y:-200, begin_ms: 900 }, 
                {id:'5_l', x:-115, y:60, begin_ms: 900 }, 
                {id:'5_r', x:130, y:160, begin_ms: 1200 },

                {id:'6_ll', x:-260, y:180, begin_ms: 900 }, 
                {id:'6_lr', x:-60, y:160, begin_ms: 900 }, 
                {id:'7_ll', x:-170, y:380, begin_ms: 900 }, 
                {id:'7_lr', x:-50, y:370, begin_ms: 900 }, 

                {id:'6_rl', x:100, y:320, begin_ms: 1200 },
                {id:'6_rr', x:190, y:300, begin_ms: 1200 },
                {id:'7_rr', x:260, y:350, begin_ms: 1200 },
                {id:'8_rr', x:340, y:380, begin_ms: 1200 }
                
			],
		lines: [
                {id_from:"2_r", id_to:"1_r", begin_ms:200},
                {id_from:"2_l", id_to:"1_l", begin_ms:400},
                {id_from:"3_c", id_to:"2_r", begin_ms:700},
                {id_from:"3_c", id_to:"2_l", begin_ms:900},
                {id_from:"2_l", id_to:"4_lt", begin_ms:1200},
                {id_from:"2_r", id_to:"4_lr", begin_ms:1500},

                {id_from:"5_l", id_to:"2_l", begin_ms:1700},
                {id_from:"5_r", id_to:"2_r", begin_ms:2100},

                {id_from:"6_ll", id_to:"5_l", begin_ms:2600},
                {id_from:"6_lr", id_to:"5_l", begin_ms:2800},
                {id_from:"7_ll", id_to:"6_ll", begin_ms:3100},
                {id_from:"7_lr", id_to:"6_lr", begin_ms:3400},
                
                {id_from:"6_rl", id_to:"5_r", begin_ms:2700},
                {id_from:"6_rr", id_to:"5_r", begin_ms:2900},
                {id_from:"7_rr", id_to:"6_rr", begin_ms:3300},
                {id_from:"8_rr", id_to:"7_rr", begin_ms:3600}
			],
	},
	'巨蟹座' : {
		stars: [ {id:'1', x:-20, y:-230, begin_ms: 300 },
                {id:'2', x:-5, y:0, begin_ms: 300 },
                {id:'3', x:-25, y:100, begin_ms: 600 }, 
                {id:'4', x:-180, y:290, begin_ms: 600 }, 
                {id:'5', x:190, y:380, begin_ms: 1200 }      
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:300},
                {id_from:"3", id_to:"2", begin_ms:900},
                {id_from:"4", id_to:"3", begin_ms:1800},
                {id_from:"5", id_to:"3", begin_ms:2500}
			],
	},
	'獅子座' : {
		stars: [ {id:'1', x:250, y:-170, begin_ms: 300 },
                {id:'2', x:130, y:-230, begin_ms: 300 },
                {id:'3', x:40, y:-100, begin_ms: 600 }, 
                {id:'4', x:60, y:70, begin_ms: 600 }, 
                {id:'5', x:190, y:120, begin_ms: 1200 },
                {id:'6', x:290, y:250, begin_ms: 1200 },
                {id:'7', x:-80, y:290, begin_ms: 1200 },
                {id:'8', x:-270, y:380, begin_ms: 1200 },
                {id:'9', x:-170, y:170, begin_ms: 1200 } 
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:200},
                {id_from:"3", id_to:"2", begin_ms:700},
                {id_from:"4", id_to:"3", begin_ms:1300},
                {id_from:"5", id_to:"4", begin_ms:2100},
                {id_from:"9", id_to:"4", begin_ms:1900},
                {id_from:"6", id_to:"5", begin_ms:2700},
                {id_from:"8", id_to:"9", begin_ms:2500},
                {id_from:"7", id_to:"6", begin_ms:3300},
                {id_from:"7", id_to:"8", begin_ms:3100}
			],
	},
	'處女座' : {
		stars: [ {id:'1', x:120, y:-230, begin_ms: 300 },
                {id:'2', x:130, y:-130, begin_ms: 300 },
                {id:'3', x:110, y:-40, begin_ms: 600 }, 
                {id:'4_l', x:10, y:-10, begin_ms: 600 }, 
                {id:'4_b', x:125, y:110, begin_ms: 600 }, 
                {id:'5_ll', x:-130, y:-40, begin_ms: 1200 },
                {id:'5_lb', x:5, y:160, begin_ms: 1200 },
                {id:'5_r', x:190, y:210, begin_ms: 1200 },
                {id:'6_l', x:-70, y:240, begin_ms: 1200 },
                {id:'6_r', x:100, y:370, begin_ms: 1200 },
                {id:'7_l', x:-150, y:360, begin_ms: 1200 },
                {id:'7_r', x:20, y:340, begin_ms: 1200 },
                {id:'8_r', x:-10, y:420, begin_ms: 1200 }           
			],
		lines: [
                {id_from:"2", id_to:"1", begin_ms:200},
                {id_from:"3", id_to:"2", begin_ms:600},
                {id_from:"4_l", id_to:"3", begin_ms:1100},
                {id_from:"4_b", id_to:"3", begin_ms:1100},
                {id_from:"5_ll", id_to:"4_l", begin_ms:1600},
                {id_from:"5_lb", id_to:"4_l", begin_ms:1900},
                {id_from:"5_r", id_to:"4_b", begin_ms:2300},
                {id_from:"4_b", id_to:"5_lb", begin_ms:2500},

                {id_from:"6_r", id_to:"5_r", begin_ms:2300},
                {id_from:"7_r", id_to:"6_r", begin_ms:3000},
                {id_from:"8_r", id_to:"7_r", begin_ms:3400},
                
                {id_from:"6_l", id_to:"5_lb", begin_ms:2900},
                {id_from:"7_l", id_to:"6_l", begin_ms:3200}
			],
	},
	'天秤座' : {
		stars: [ {id:'1', x:-230, y:-150, begin_ms: 300 },
                {id:'2_l', x:-430, y:-10, begin_ms: 300 },
                {id:'2_r', x:-10, y:0, begin_ms: 600 }, 
                {id:'3_l', x:-340, y:150, begin_ms: 600 }, 
                {id:'3_r', x:-25, y:180, begin_ms: 600 }, 
                {id:'4_l', x:-360, y:260, begin_ms: 1200 },
                {id:'4_r', x:40, y:230, begin_ms: 1200 }
			],
		lines: [
                {id_from:"2_l", id_to:"1", begin_ms:400},
                {id_from:"2_r", id_to:"1", begin_ms:700},
                {id_from:"2_r", id_to:"2_l", begin_ms:1300},
                {id_from:"3_l", id_to:"2_l", begin_ms:1500},
                {id_from:"3_r", id_to:"2_r", begin_ms:2000},
                {id_from:"4_l", id_to:"3_l", begin_ms:2200},
                {id_from:"4_r", id_to:"3_r", begin_ms:2800}
			],
	}
}

module.exports = zodiacList