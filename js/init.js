


var chessboard = {
	width : 960,
	height : 960,
	pawnList : [],
	havePawn : [],
	addStatus : [],
	layoutChess:[]
};


chessboard.init = function () {
	this.canvas = document.getElementById('canvas');
	this.ct     = this.canvas.getContext("2d") ;
	this.canvas.width = this.width;
	this.canvas.height = this.height; 
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
	var unit = this.width/16;
	this.ct.beginPath();
	this.ct.fillStyle = '#FF0000';
	//this.ct.fillRect(obj.x*unit,obj.y*unit,obj.width,obj.height);
	this.ct.rect(obj.x*unit-obj.width/2,obj.y*unit-obj.height/2,obj.width,obj.height);
	this.ct.textAlign="center";
    this.ct.font = "2pt Arial";
    this.ct.strokeText(obj.text, obj.x*unit, obj.y*unit);
    this.ct.strokeStyle = "red";
    this.ct.stroke();
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
	this.canvas.addEventListener('click',function(e) {
		p = util.getEventPosition(e)
		console.log(p)
		console.log(that.ct.isPointInPath(p.x,p.y))
	})
}


chessboard.reDraw = function(p) {
	var that =this;
	arr.forEach(function(v){
		that.ct.clearRect(v.x*unit-v.width/2,v.y*unit-v.height/2,v.width,v.height);
		that.ct.beginPath();
		that.ct.textAlign="center";
	    that.ct.font = "2pt Arial";
	    that.ct.strokeText(v.text, v.x*unit, v.y*unit);
	    that.ct.strokeStyle = "red";
	    that.ct.stroke();
	    if(p && ctx.isPointInPath(p.x, p.y)){
	      	who.push(i);
	    }
		
	})
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





