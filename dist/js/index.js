		
	$(function(){
		
	
		
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
		slide();		
		
		function hover(){
			var oPrelist=document.getElementsByClassName("prelist");
			var oDetillist=document.getElementsByClassName("detillist");
			
			for(var i=0; i<oPrelist.length;i++){
				oPrelist[i].onmouseover=function(){
					oDetillist[0].style.display="block";
				}
				oPrelist[i].onmouseout=function(){
					oDetillist[0].style.display="none";
				}
				oDetillist[0].onmouseover=function(){
					oDetillist[0].style.display="block";
				}
				oDetillist[0].onmouseout=function(){
					oDetillist[0].style.display="none";
				}
			}
		}
		hover();

		function DDjs(){
		setInterval(function(){
						var oDate1=new Date();
						var oDate2=new Date("2018-6-3 20:10:15");
						var oDjs=document.getElementsByClassName("djs")[0];				
						var oLi=oDjs.children;				
						function djs(date1,date2){
							var ss=Math.abs(date1-date2)/1000;
							var days=Math.floor(ss/3600/24);
							var hours=Math.floor(ss/3600%24);
							var mins=Math.floor(ss/60%60);
							var miao=Math.floor(ss%60);					
							var str = ""+format(hours)+format(mins)+format(miao);
							function format(num){
								return num < 10 ? "0"+num : num;
							}					
							oLi[1].innerHTML=str[0];
							oLi[2].innerHTML=str[1];
							oLi[4].innerHTML=str[2];
							oLi[5].innerHTML=str[3];
							oLi[7].innerHTML=str[4];
							oLi[8].innerHTML=str[5];
						}
						djs(oDate1,oDate2);				
					},1000)
		
		}
		DDjs();


	/*let obj = {
		url:"../data/fenlei.json",
		type:"get",
		success:function(data){
			var data=JSON.parse(data);
			console.log(data);
			//location.reload();
			
			//$(".prelist")
		}
	}
	
	Ajax(obj);*/
	
	
	/*let obj = {
		url:"../data/fenlei.json",
		type:"get",		
		success:function(data){
			var data=JSON.parse(data);
			var oBox=document.getElementsByClassName("sortlist")[0];
			
			//console.log(data);
			//location.reload();
			//console.log(data.list1)
			
			for(var attr in data){
				//console.log(data[attr]);
				var arr=data[attr];
				
				
				var oDL=document.getElementsByClassName("prelist");
				for(var i=0;i<arr.length;i++){
					//console.log(arr[i])
					oBox.innerHTML+=`<div class="prelist"><dl class="min_item"><dt>${arr[i][0]}</dt><dd></dd></dl></div>`;
					
					var oDiv=document.getElementsByClassName("prelist")[i];
					var oDL=oDiv.children[0];//获取到dl
					var odd=oDL.children[1];//获取到dd					
					for(var j=0;j<arr[i][1].length;j++){
						console.log(arr[i][1][j])
						odd.innerHTML+=`<a href="">${arr[i][1][j]}</a>`;	
					}
				}
			}
		}
	}
	
	Ajax(obj);*/
	
	
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var totop=document.getElementById("totop");
		totop.onclick=function(){			
			document.documentElement.scrollTop=document.body.scrollTop=0;
		}		
	}
	
	
			
			
	
	


})

























