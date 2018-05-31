
			
		
			var products = {
				"10001": {
					id: 10001,
					title: "花果山 36or39号佳沛新西兰金奇异果10个装 82~103g",
					price: 79,
					imgUrl: "image/mihoutao.jpg"
				},
				"10002": {
					id: 10002,
					title: "加拿大 多春鱼/鲜动生活 200g",
					price: 88,
					imgUrl: "image/yu.jpg"
				},
				"10003": {
					id: 10003,
					title: "海南妃子笑荔枝 5斤装",
					price: 88,
					imgUrl: "image/minlizhi.jpg"
				},
				"10004": {
					id: 10004,
					title: "海南三亚贵妃芒5斤装 单果50~150g 5斤（±100g） 2.5kg",
					price: 88,
					imgUrl: "image/mangguo.jpg"
				},
				"10005": {
					id: 10005,
					title: "佳沛新西兰金奇异果10个装 82",
					price: 100,
					imgUrl: "image/yu.jpg"
				},
				"10006": {
					id: 10006,
					title: "佳沛新西兰金奇异果10个装 82",
					price: 200,
					imgUrl: "image/minlizhi.jpg"
				}

			}

			//总价
			var gong=0;
			
			var oUl = document.getElementById("cartList");
			if(getCookie("cart")===undefined){
				oUl.innerHTML = "暂时没有添加任何商品";
			}else{
				var obj = JSON.parse(getCookie("cart"));
			}
			
			console.log(obj);
			console.log("aaaa")
			for(var attr in obj){
	oUl.innerHTML +="<li><span><img src='" + products[attr].imgUrl + "'></span><span>"+products[attr].title+"</span><span>数量："+obj[attr]+"</span><span>单价：￥" + products[attr].price + "</span><span>小计：" + products[attr].price*obj[attr] + "元</span><span class='delBtn' data-id='"+attr+"'>删除</span></li>"
				gong+=obj[attr]*(products[attr].price)
			}
				
				
			}
			
			
			
			var oDelBtn = document.getElementsByClassName("delBtn");
			for(var i = 0 ; i < oDelBtn.length; i++){
				oDelBtn[i].onclick = function(){
					var proID = this.getAttribute("data-id");
					delete obj[proID];
					oUl.removeChild(this.parentNode);
					setCookie("cart",JSON.stringify(obj),7);
					window.location.reload();
					
				}
			}
			
//			console.log(obj)
//			$("#cartList").append("<li><span>共计："+gong+"元</span><span>去结算</span></li>")
//			
//			
//			console.log(gong)
//			
		