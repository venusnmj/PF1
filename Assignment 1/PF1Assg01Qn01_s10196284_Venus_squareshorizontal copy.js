(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1", frames: [[0,0,130,40],[0,42,130,40],[132,0,2,800]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.squareTwo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squareTwo, new cjs.Rectangle(0,0,60,60), null);


(lib.squareOne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.squareOne, new cjs.Rectangle(0,0,60,60), null);


(lib.btn_Move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Move", "25px 'Times'", "#535353");
	this.text.lineHeight = 27;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,29);


// stage content:
(lib.PF1Assg01Qn01_s10196284_Venus_squareshorizontalcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var dx = 5;
		var dmtoe = this.squareOne.nominalBounds.width/2;
		var dC1 = this.stage.canvas.width/2 - dmtoe - this.squareOne.x;
		var dC2 = this.squareTwo.x -200 - dmtoe;
		
		this.btn_Move.addEventListener ("click",Move.bind(this));
		//this.squareOne.addEventListener ("click",Move1.bind(this));
		//this.squareTwo.addEventListener ("click",Move2.bind(this));
		
		
		
		function Move(evt) {
		 if (this.square.x < 200-dmtoe && this.square.x > dmtoe){
			 this.squareOne.x = this.squareOne.x + dx 
			 this.squareOne.x = 200-dmtoe
			 this.squareOne.x = this.squareOne.x -dx
			 this.squareOne.x = dmtoe
		 }
		 
		 
		 
		 
			this.dS1.text = dC1;
			 this.dS2.text = dC2;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.dS2 = new cjs.Text("", "16px 'Times'", "#535353");
	this.dS2.name = "dS2";
	this.dS2.lineHeight = 18;
	this.dS2.lineWidth = 100;
	this.dS2.parent = this;
	this.dS2.setTransform(84.1,27);

	this.dS1 = new cjs.Text("", "16px 'Times'", "#535353");
	this.dS1.name = "dS1";
	this.dS1.lineHeight = 18;
	this.dS1.lineWidth = 100;
	this.dS1.parent = this;
	this.dS1.setTransform(84.1,7);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(8.35,25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(8.35,5,0.5,0.5);

	this.btn_Move = new lib.btn_Move();
	this.btn_Move.name = "btn_Move";
	this.btn_Move.setTransform(199.2,339.75,1,1,0,0,0,31.2,14.5);
	new cjs.ButtonHelper(this.btn_Move, 0, 1, 1);

	this.squareTwo = new lib.squareTwo();
	this.squareTwo.name = "squareTwo";
	this.squareTwo.setTransform(338.5,203.55,1,1,0,0,0,30,30);

	this.squareOne = new lib.squareOne();
	this.squareOne.name = "squareOne";
	this.squareOne.setTransform(77.5,203.55,1,1,0,0,0,30,30);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(199.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.squareOne},{t:this.squareTwo},{t:this.btn_Move},{t:this.instance_1},{t:this.instance},{t:this.dS1},{t:this.dS2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(208.4,199.5,160.1,200);
// library properties:
lib.properties = {
	id: '8FD1EC3F1E4B4A0C93C361D076F2E5DA',
	width: 400,
	height: 400,
	fps: 24,
	color: "#99FF00",
	opacity: 1.00,
	manifest: [
		{src:"images/PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1.png?1595866883766", id:"PF1Assg01Qn01_s10196284_Venus_squareshorizontal copy_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8FD1EC3F1E4B4A0C93C361D076F2E5DA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;