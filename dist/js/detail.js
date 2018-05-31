var oBox=document.getElementById("box");
			var oMid=document.getElementById("mid");
			var oMidimg=oMid.children[0];
			var oMax=document.getElementById("max");
			var oMin=document.getElementById("min");
			var oMinimg=oMin.children;
			var oZoom=document.getElementById("zoom");
			var oMaximg=oMax.children[0];
			oMid.onmouseover=function(){
				oZoom.style.display="block";
				oMax.style.display="block";
			}
			oMid.onmouseout=function(){
				oZoom.style.display="none";
				oMax.style.display="none";
			}
			
			for(var i=0;i<oMinimg.length;i++){
				oMinimg[i].index=i;
				oMinimg[i].onmouseover=function(){
					oMidimg.src=oMinimg[this.index].src;
					oMaximg.src=oMinimg[this.index].src;
				}
			}
			
			
			
			oMid.onmousemove=function(e){
				var evt=e||event;
				var _left=evt.pageX-oBox.offsetLeft-oZoom.offsetWidth/2;
				var _top=evt.pageY-oBox.offsetTop-oZoom.offsetHeight/2;
				if(_left<=0){
					_left=0;
				}
				if(_left>=oBox.offsetWidth-oZoom.offsetWidth){
					_left=oBox.offsetWidth-oZoom.offsetWidth
				}
				if(_top<=0){
					_top=0;
				}
				if(_top>=oBox.offsetHeight-oZoom.offsetHeight){
					_top=oBox.offsetHeight-oZoom.offsetHeight
				}
				oZoom.style.left=_left+"px";
				oZoom.style.top=_top+"px";
				oMaximg.style.left=-(_left/oBox.offsetWidth)*oMaximg.offsetWidth+"px";
				oMaximg.style.top=-(_top/oBox.offsetHeight)*oMaximg.offsetHeight+"px";
			}