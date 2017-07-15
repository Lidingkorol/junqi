

var Astar = {};


Astar


//Astar
//获取周边八个点
function SurroundPoint(curPoint) {
	var x = curPoint.x;
	var y = curPoint.y;
	return [
		{x:x-1,y:y-1},
		{x:x-1,y:y},
		{x:x+1,y:y},
		{x:x,y:y-1}
		{x:x,y:y+1}
		{x:x+1,y:y-1}
		{x:x+1,y:y}
		{x:x+1,y:y+1}
	]
}


//计算每个点G,H值
function  countVal(sPoint) {
	for(var i in sPoint) {
		var item = sPoint[i];
		var g = 
	}
}


function Astar(startObj,endObj){
	var openList = []    //开启列表
	var closeList = []   //关闭列表
	
	
	
	openList.push(startObj)
}