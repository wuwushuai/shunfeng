$(function(){
			$("#btn").click(function(){
				$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status":"login","username":$("#tel").val(),"password":$("#passWord").val},function(data){
					console.log(data);
					if(data.code==0){
						window.location.href="index.html";
					}else{
						alert(data.message)
					}
				});
				
			});
		
		
		
		
		
		});