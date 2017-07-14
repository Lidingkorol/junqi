


var chessboard = {
	width : 320,
	height : 320,
	pawnList : [],
	havePawn : [],
	addStatus : []
};


chessboard.init = function () {
	this.canvas = document.getElementById('canvas');
	this.ct     = this.canvas.getContext("2d") ;
	this.canvas.width = this.width;
	this.canvas.height = this.height; 
	this.dot();
	this.setPawn();
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


var testPawn = {x:1,y:2}

chessboard.setPawn = function () {
	for(var i=0;i<10;i++){
		this.pawnList.push(util.createPawnObj(testPawn))
	}
	
}


function findPath(start,end) {	
	var allRoad = [];
	for(var i=0;i<)
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




