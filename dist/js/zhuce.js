
		$(function(){
			
			
			
			var passWord=document.getElementById("passWord");
			var strongpsw=document.getElementById("strongpsw");
			var oSpan=strongpsw.children;
			passWord.oninput=function(){
				var val=passWord.value;
				var flag1 = false,flag2 = false,flag3 = false;
				for(var i = 0; i < val.length; i++){
					var code = val.charCodeAt(i);
					//判断是否含有数字
					if(code>=48 && code<=57){
						flag1 = true;
					}
					//判断是否含有大写字母
					if(code>=65 && code<=90){
						flag2 = true;
					}
					//判断是否含有小写字母
					if(code>=97 && code<=122){
						flag3 = true;
					}
					
				}
				if(flag1&&flag2&&flag3){
					oSpan[2].style.background="greenyellow";
					oSpan[1].style.background="";
					oSpan[0].style.background="";
					
				}
				else if(flag1&&flag2 || flag1&&flag3 || flag2&&flag3){
					oSpan[1].style.background="orangered";
					oSpan[0].style.background="";
					oSpan[2].style.background="";
				}
				else if(flag1||flag2||flag3){
					oSpan[0].style.background="chocolate";
					oSpan[1].style.background="";
					oSpan[2].style.background="";
				}
				
			}
			
			
			
			
			$("#btn").click(function(){
				$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status":"register","username":$("#tel").val(),"password":$("#passWord").val},function(data){
					console.log(data);
					if(data.code==0){
						
							window.location.href="index.html";
						
					}else{
						alert(data.message)
					}
				});
				
			});
			
			
			
			
			
			
			
		});
