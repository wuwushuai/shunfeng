var products = [{
				id: 10001,
				title: "花果山 36or39号佳沛新西兰金奇异果10个装 82~103g",
				price: 79,
				imgUrl: "image/mihoutao.jpg",
				minimgUrl1:"image/minmihoutao1.jpg",
				minimgUrl2:"image/minmihoutao2.jpg"
			},  {
					id: 10002,
					title: "加拿大 多春鱼/鲜动生活 200g",
					price: 88,
					imgUrl: "image/yu.jpg",
					minimgUrl1:"image/minyu1.jpg",
					minimgUrl2:"image/minyu2.jpg"
				},
				 {
					id: 10003,
					title: "海南妃子笑荔枝 5斤装",
					price: 88,
					imgUrl: "image/minlizhi.jpg",
					minimgUrl1:"image/minlizhi1.jpg",
					minimgUrl2:"image/minlizhi2.jpg"
				},
				{
					id: 10004,
					title: "海南三亚贵妃芒5斤装 单果50~150g 5斤（±100g） 2.5kg",
					price: 88,
					imgUrl: "image/mangguo.jpg",
					minimgUrl1:"image/minmang1.jpg",
					minimgUrl2:"image/minmang2.jpg"
				},
				 {
					id: 10005,
					title: "佳沛新西兰金奇异果10个装 82",
					price: 100,
					imgUrl: "image/yu.jpg",
					minimgUrl1:"image/minyu1.jpg",
					minimgUrl2:"image/minyu2.jpg"
				},
				{
					id: 10006,
					title: "海南妃子笑荔枝 5斤装",
					price: 200,
					imgUrl: "image/minlizhi.jpg",
					minimgUrl1:"image/minlizhi1.jpg",
					minimgUrl2:"image/minlizhi2.jpg"
				},
				{
					id: 10007,
					title: "佳沛新西2",
					price: 100.9,
					imgUrl: "image/yu.jpg",
					minimgUrl1:"image/minyu1.jpg",
					minimgUrl2:"image/minyu2.jpg"
				},
				{
					id: 10008,
					title: "佳沛新西兰金装 82",
					price: 200.9,
					imgUrl: "image/minlizhi.jpg",
					minimgUrl1:"image/minlizhi1.jpg",
					minimgUrl2:"image/minlizhi2.jpg"
				}];
			
			
			var str = location.search;
			console.log(str);
			var proId = str.split("=")[1];

			var aBtn = document.getElementsByClassName("btn");
			var oNum = document.getElementsByClassName("nums")[0];

			if(getCookie("cart") !== undefined) {
				var obj = JSON.parse(getCookie("cart"));
			} else {
				var obj = {};
			}
			
			
			
			


			//var oBox = document.getElementById("box");
			
			//图片
			var oMid=document.getElementById("mid");
			var oMidImg=oMid.children[0];			
			var oMax=document.getElementById("max");
			var oMaxImg=oMax.children[0];			
			var oMin=document.getElementById("min");
			var oMinImg1=oMin.children[0];
			var oMinImg2=oMin.children[1];
			
			//标题，价格
			var buyName=document.getElementsByClassName("buyName")[0];
			var buyPrice=document.getElementsByClassName("buyPrice")[0];
			var BuyPrice=buyPrice.children[1];
			
			
			//加入购物车
			var isHave=document.getElementsByClassName("isHave")[0];
			var oCar=isHave.children[1];
				//第一个li
			var preNum=isHave.children[0];
				//第一个li里面的数字框
			var prenum=preNum.children[0];
				
				
			
			
			for(var i = 0; i < products.length; i++){
				if(products[i].id == proId){
					oMidImg.src=products[i].imgUrl;
					oMaxImg.src=products[i].imgUrl;
					oMinImg1.src=products[i].minimgUrl1;
					oMinImg2.src=products[i].minimgUrl2;
					buyName.innerHTML=products[i].title;
					BuyPrice.innerHTML=products[i].price;
					oCar.innerHTML = "<input type='button' class='btn' value='添加购物车' data-id='" + +products[i].id + "'>";
					
					var iD=products[i].id;
					
					for(var attr in obj){
						//console.log(obj[attr])
						
						//console.log(btn[i])
						if(attr==iD){
							//console.log(obj[attr])
							var oBtn=document.getElementsByClassName("btn");
														
							prenum.innerHTML=obj[attr];
							//window.location.reload()
						}
					}
					
					//oBox.innerHTML = "<img src='"+products[i].imgUrl+"'>"
				}
			}
			
			
			var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}

			oNum.innerHTML = sum;

			for(var i = 0; i < aBtn.length; i++) {
				aBtn[i].onclick = function() {
					var productId = this.getAttribute("data-id");
					if(obj[productId] == undefined) {
						obj[productId] = 1;
					} else {
						obj[productId]++;
					}

					//console.log(obj);
					var sum = 0;
					for(var b in obj) {
						sum += obj[b];
					}

					oNum.innerHTML = sum;

					var objToStr = JSON.stringify(obj);
					console.log(objToStr)
					setCookie("cart", objToStr, 7);
					
					
					
				}
			}
			
			
			//getCookie("cart");
			//console.log(getCookie("cart"))
			
			
			



