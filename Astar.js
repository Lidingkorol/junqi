

function Astar(){
	this.openList=[];	//待处理节点
	this.closeList=[];   //已处理节点
	this.result=[];		//最佳路径结果
	this.map={
		cols:3,
		rows:3,
		arr:[
			[0,0,0],
            [0,0,0],
			[0,0,0]
		]
	}
};




Astar.prototype.findPath = function(startX,startY,endX,endY) {
	this.openList.push({x:startX,y:startY,G:0});
	while(this.openList.length>0){
		var cPoint = SurroundPoint(this.openList.pop())
		this.closeList.push(cPoint)
		for(var i in cPoint) {
			var item = cPoint[i];
			if(item.x>=0&&
				item.y>=0&&
				item.x<this.map.rows&&
				item.y<this.map.cols&&
				this.map.arr[item.x][item.y]!=1&&
				!existList(item,this.closeList)) {
					var g = cPoint.G + ((cPoint.x - item.x) * (cPoint.y - item.y) == 0 ? 10 : 14);
					if(!existList(item, this.openList)) {
						//计算H，通过水平和垂直距离进行确定
						item['H'] = Math.abs(endX - item.x) * 10 + Math.abs(endX - item.y) * 10;
						item['G'] = g;
						item['F'] = item.H + item.G;
						item['parent'] = cPoint;
						this.openList.push(item);
					}else {
						var index = existList(item, this.openList);
						//如果当前点的g更小
						if (g < this.openList[index].G) {
							this.openList[index].parent = cPoint;
							this.openList[index].G = g;
							this.openList[index].F=g+this.openList[index].H;
						}
					}
				}

		}
		this.openList.sort(sortF)
	}

}

function sortF(a,b){
    return b.F- a.F;
}

function existList(point,list) {
	for(var i in list) {
		if(point.x==list[i].x&&point.y==list[i].y) {
			return i;
		}
	}
	return false;
}

//Astar
//获取周边符合条件的点
function SurroundPoint(curPoint) {
	var x = curPoint.x;
	var y = curPoint.y;
	return [
		{x:x-1,y:y-1},
		{x:x-1,y:y},
		{x:x+1,y:y},
		{x:x,y:y-1},
		{x:x,y:y+1},
		{x:x+1,y:y-1},
		{x:x+1,y:y},
		{x:x+1,y:y+1}
	]
}

