/*function Ajax(url,fn){
		if(window.XMLHttpRequest){
			var xhr = new XMLHttpRequest();
		}else{
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xhr.open("GET",url,true);
		
		xhr.send();
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var data = xhr.responseText;
				fn(data)						
			}
		}
				
}
*/
//{name:"john"}键值对
/*
 
 * 
 * 
 * */
/*function Ajax(type,url,data,fn){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var attr in data){
		str+= attr+"="+data[attr]+"&";
	}
	str = str.replace(/&$/,"");

	if(type.toLowerCase() == "get"){
		xhr.open("get",url+"?"+str,true);
		xhr.send();
	}else{
		xhr.open("post",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var data = xhr.responseText;
			fn(data);
		}
	}
	
	
}*/
//{type:"get",url:"data.json",data:{},success:function(){},error:function(){}}
function Ajax(obj){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var attr in obj["data"]){
		str+= attr+"="+obj["data"][attr]+"&";
	}
	str = str.replace(/&$/,"");

	if(obj["type"].toLowerCase() == "get"){
		if(obj["data"]===undefined){
			xhr.open("get",obj["url"],true);
		}else{
			xhr.open("get",obj["url"]+"?"+str,true);
		}
		
		xhr.send();
	}else{
		xhr.open("post",obj["url"],true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status==200){
				var data = xhr.responseText;
				obj["success"](data);
			}else{
				if(obj["error"]){
					obj["error"]();
				}
				
			}
			
		}
	}
}