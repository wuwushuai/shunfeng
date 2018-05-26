		function slide(){	
			var oSlide_show=document.getElementById("slide_show");
			var oScrollBanner = document.getElementById("scrollBanner");
			var oScrollList = document.getElementById("scrollList");
			var oBtn = document.getElementById("btns");
			var oNums = document.getElementById("nums");
			var oUl = oScrollList.children[0];
			var aLi = oUl.children;
			var perWidth = aLi[0].offsetWidth;
			var count = 0;
			oUl.style.width = aLi.length * perWidth + "px";
			//var aBtns = oBtn.children;
			var aNums = oNums.children[0].children;
			aNums[0].className = "hover";
			var timer = setInterval(function(){
				move();
			},3000);
			
			function move(){
				count++;
				if(count==aLi.length){
					oUl.style.left = 0;
					count = 1;
				}
				if(count == -1){
					oUl.style.left = -perWidth*(aLi.length-1)+"px";
					count = aLi.length - 2;
				}
				//角标变化
				for(var i = 0; i < aNums.length; i++){
					aNums[i].className = "";
				}
				if(count == aLi.length-1){
					aNums[0].className = "hover";
				}else{
					aNums[count].className = "hover";
				}
				startMove(oUl,{left:-perWidth*count});
			}
			
			
			
			oScrollBanner.onmouseover = function(){
				clearInterval(timer);
			}
			oScrollBanner.onmouseout = function(){
				timer = setInterval(function(){
					move();
				},3000);
			}
			
			for(var j = 0; j < aNums.length; j++){
				aNums[j].index = j;
				aNums[j].onmouseover = function(){
					count = this.index-1;
					move();
				}
			}
			


}