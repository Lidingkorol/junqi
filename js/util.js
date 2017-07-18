


var util = {};

/*
 * 工兵：11
 * 排长：12
 * 连长：13
 * 营长：14
 * 团长：15
 * 旅长：16
 * 师长：17
 * 军长：18
 * 司令：19
 * 炸弹：20
 * 地雷：21
 * 军旗：10 
 * 
 */

util.createPawnObj=function(obj) {
	var o = new Object();
	switch(obj.value) {
		case 10:
		o.text = '军旗';break;
		case 11:
		o.text = '工兵';break;
		case 12:
		o.text = '排长';break;
		case 13:
		o.text = '连长';break;
		case 14:
		o.text = '营长';break;
		case 15:
		o.text = '团长';break;
		case 16:
		o.text = '旅长';break;
		case 17:
		o.text = '师长';break;
		case 18:
		o.text = '军长';break;
		case 19:
		o.text = '司令';break;
		case 20:
		o.text = '炸弹';break;
		case 21:
		o.text = '地雷';break;
	}
	o.x = obj.x;
	o.y = obj.y;
	o.user = obj.user;
	o.value = obj.value;
	o.width = 30;
	o.height = 24;
	return o;
}



util.shuffle = function(arr) {
	if(typeof arr!='Array') {
		return false;
	}
	var res = [];
	for(var i=0;i<arr.length;i++) {
		var j = Math.floor(Math.random()*arr.length) 
		res[i] = arr[j];
		arr.splice(j,1);
	}
	return res;
}

util.getEventPosition = function(ev){  
  var x, y;  
  if (ev.layerX || ev.layerX == 0) {  
    x = ev.layerX;  
    y = ev.layerY;  
  } else if (ev.offsetX || ev.offsetX == 0) { // Opera  
    x = ev.offsetX;  
    y = ev.offsetY;  
  }  
  return {x: x, y: y};  
}  



util.sort = function(a,b) {
	return (a.x-b.x||a.y-b.y)
}
