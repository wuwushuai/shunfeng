var oInput=document.getElementById("search_text");
			var oUl=document.getElementById("searchUl");
			var oBox=document.getElementById("searchbox");
			
			oInput.oninput=function(){
				var oScript=document.createElement("script");
				var val=oInput.value;
				oScript.src="https://suggest.taobao.com/sug?code=utf-8&q="+val+"&callback=bb&k=1&area=c2c&bucketid=9";
				document.body.appendChild(oScript);
				document.body.removeChild(oScript);
				
				
			}
			
			function bb(data){
				var str="";
				var arr=data.result;
				for(var i=0;i<arr.length;i++){
					str+="<li><a href='https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q="+arr[i][0]+"'>"+arr[i][0]+"</a></li>"
					
				}
				oUl.innerHTML=str;
				oUl.style.display="block";
				
				var arr1=data.magic;
				var arr1a=[];
				var adata=[];
				
				
				for(var j=0;j<arr1.length;j++){
					arr1a.push(arr1[j].index);
					adata.push(arr1[j].data);	
				}
				
				
				var oLi=oUl.children;
				console.log(arr1a[0])
				

					
					for(var k=0;k<arr1a.length;k++){
						var oDiv=document.createElement("div");
						for(var m=0;m<adata[k].length;m++){
							for(var n=0;n<adata[k][m].length;n++){
								oDiv.innerHTML+="<span>"+adata[k][m][n].title+"</span>"
								var oSpan=oDiv.children;
								if(adata[k][m][n].type=="hot"){
									oSpan[n].style.background="red";
								}
							}	
						}
					oBox.appendChild(oDiv);
					}
					
					
					var aDiv=oBox.children;
					for(var i=0;i<oLi.length;i++){
						oLi[i].index=i;
						
						oLi[i].onmouseover=function(){
							console.log(this.index);
							for(var j=0;j<arr1a.length;j++){
								if(this.index+1==arr1a[j]){
									aDiv[j].style.display="block";
								}else{
									aDiv[j].style.display="none"
								}
							}
						}
						
					}
					
			}
			