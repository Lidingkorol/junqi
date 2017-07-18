


var chessboard = {
	width : 980,
	height : 980,
	board:20,
	xUnit : '',
	yUint : '',
	pawnList : [],
	havePawn : [],
	addStatus : [],
	layoutChess:[],
	isPlaying : true,
	isReady : true
};


chessboard.init = function () {
	this.canvas = document.getElementById('canvas');
	this.ct     = this.canvas.getContext("2d") ;
	this.canvas.width = this.width;
	this.canvas.height = this.height; 
	this.xUnit = (this.width - this.board)/16;
	this.yUnit = (this.height - this.board)/16;
	this.dot();
	this.layout();
	this.clickEvent();
	console.log(this)
}







chessboard.dot = function () {
	
	/*
	 *    -1：棋盘外， 1：棋盘内，铁轨外，	5：铁轨上，		6:行营	
	 * 
	 */
	
	this.addStatus= [
		[-1,-1,-1,-1,-1,-1, 1, 1, 1, 1, 1,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 5, 5, 5, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 6, 1, 6, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 1, 6, 1, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 6, 1, 6, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 5, 5, 5, 5,-1,-1,-1,-1,-1,-1 ],
		[ 1, 5, 5, 5, 5, 5, 5,  , 5,  , 5, 5, 5, 5, 5, 5, 1 ],
		[ 1, 5, 6, 1, 6, 5,  ,-1,  ,-1,  , 5, 6, 1, 6, 5, 1 ],
		[ 1, 5, 1, 6, 1, 5, 5,  , 5,  , 5, 5, 1, 6, 1, 5, 1 ],
		[ 1, 5, 6, 1, 6, 5,  ,-1,  ,-1,  , 5, 6, 1, 6, 5, 1 ],
		[ 1, 5, 5, 5, 5, 5, 5,  , 5,  , 5, 5, 5, 5, 5, 5, 1 ],
		[-1,-1,-1,-1,-1,-1, 5, 5, 5, 5, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 6, 1, 6, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 1, 6, 1, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 6, 1, 6, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 5, 5, 5, 5, 5,-1,-1,-1,-1,-1,-1 ],
		[-1,-1,-1,-1,-1,-1, 1, 1, 1, 1, 1,-1,-1,-1,-1,-1,-1 ]
	];
	
	for(var i=0;i<17;i++){
		this.havePawn[i] = new Array();
		for(var j=0;j<17;j++){
			this.havePawn[i][j] = 0;
		}
	}
	
}



chessboard.setPawn = function (chessList) {
	console.log(chessList)
	for(var i=0;i<chessList.length;i++) {
		this.drawPawn(chessList[i])
	}
	
}


chessboard.drawPawn = function(obj) {
	this.ct.beginPath();
	this.ct.fillStyle = '#FF0000';
	//this.ct.fillRect(obj.x*unit,obj.y*unit,obj.width,obj.height);
	this.ct.rect(obj.x*this.xUnit-obj.width/2,obj.y*this.yUnit-obj.height/2,obj.width,obj.height);
	this.ct.textAlign="center";
    this.ct.font = "2pt Arial";
    this.ct.strokeText(obj.text, obj.x*this.xUnit, obj.y*this.yUnit);
    this.ct.strokeStyle = "red";
    this.ct.stroke();
}


chessboard.drawPawn2 = function(arr) {
	console.log(arr)
	
	this.ct.clearRect(0,0,this.width,this.height);
	var that = this;
	arr.forEach(function(v){
		that.ct.beginPath();
		that.ct.rect(v.x*that.xUnit-v.width/2,v.y*that.yUnit-v.height/2,v.width,v.height);
		that.ct.textAlign="center";
	    that.ct.font = "2pt Arial";
	    that.ct.strokeText(v.text, v.x*that.xUnit, v.y*that.yUnit);
	    that.ct.strokeStyle = "red";
	    that.ct.stroke();
		
	})
	
}


chessboard.layout = function() {
	var qizi =[11,11,11,12,12,12,13,13,13,14,14,15,15,16,16,17,17,18,19,20,20,21,21,21,10];
	var res = qizi;
	var testArr = [];
	for(var i=6;i<11;i++){
		testArr[i] = new Array();
		for(var j=11;j<17;j++){
			if(!(((i==7||i==9)&&(j==14||j==12))||(i==8&&j==13))) {
				var k = Math.floor(Math.random()*res.length)  
				this.layoutChess.push(util.createPawnObj({x:i,y:j,value:res[k]}))
				res.splice(k,1);
			}
		}
	}
	console.log(this.layoutChess)
	this.setPawn(this.layoutChess);
}


chessboard.clickEvent = function() {
	var that = this;
	var offsetPawn = [];
	this.canvas.addEventListener('click',function(e) {
		p = util.getEventPosition(e)
		var grid = that.getClickPoint(p)
		console.log(grid)
		var offset = that.findChess(grid);
		//摆棋
		if(!that.isReady&&offset.length!=0){
			offsetPawn.push(offset);
			if(offsetPawn.length>=2) {
				var temp;
				temp = {x:that.layoutChess[offsetPawn[0]].x,y:that.layoutChess[offsetPawn[0]].y};
				that.layoutChess[offsetPawn[0]].x = that.layoutChess[offsetPawn[1]].x;
				that.layoutChess[offsetPawn[0]].y = that.layoutChess[offsetPawn[1]].y;
				that.layoutChess[offsetPawn[1]].x = temp.x;
				that.layoutChess[offsetPawn[1]].y = temp.y;
				temp = '';
				offsetPawn = [];
				that.drawPawn2(that.layoutChess);
				that.layoutChess.sort(util.sort);
			}
		}
		//走棋
		if(that.isReady&&that.isPlaying) {
			if(offsetPawn.length==0&&offset.length!=0) {
				console.log('s')
				offsetPawn.push(offset)
			}else {
				if(offsetPawn.length>=1) {
					if(offset.length!=0) {
						offsetPawn = [];
					}
					if(offset.length==0) {
						offsetPawn.push(grid)
						console.log(offsetPawn[1].x)
						that.layoutChess[offsetPawn[0]].x = offsetPawn[1].x;
						that.layoutChess[offsetPawn[0]].y = offsetPawn[1].y;
						that.drawPawn2(that.layoutChess);
						that.layoutChess.sort(util.sort);
					}
				}
			}
		}
		//清除操作
		if(offsetPawn.length>=2) {
			offsetPawn = [];
		}
		
		
	})
}

chessboard.getClickPoint = function(point) {
	var p = {};
	var x = Math.ceil((point.x - this.board)/this.xUnit);
	var y = Math.ceil((point.y - this.board)/this.yUnit);
	p.x = x;
	p.y = y;
	return p
}

chessboard.findChess = function(grid) {
	var who = [];
	this.layoutChess.forEach(function(v,i) {
		if(v.x==grid.x&&v.y==grid.y) {
			who.push(i);
		}
	})
	return who;
}




//observer

/*
var observer = function(data){
	this.data = data;
    this.transform(data);
};

observer.prototype.transform = function(data){
	for(var key in data){
		this.defineReactive(data,key,data[key]);
	}
}
observer.prototype.defineReactive = function(data,key,value){
	var dep = new Dep();
	Object.defineProperty(data,key,{
		enumerable : true,
		configurable : true,
		get:function(){
			console.log('get key' + value)
			return value;
		},
		set:function(newVal){
			console.log('set key'+newVal)
			if(newVal == value){
				return; 
			}
			value = newVal;
			observer(newVal)
		}
	})
	observer(value);
}
*/





