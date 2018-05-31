//大部分情况下，添加购物车，商品会存到数据库里，通过接口而不是cookie

			//商品数据源自后台，cookie大小限制，条数限制
			//一件商品是否可以看成是一个对象{id:10001,title:"iwatch",price:1888,imgUrl:"img/iwatch.jpg"}

			var products = {
				"10001": {
					id: 10001,
					title: "花果山 36or39号佳沛新西兰金奇异果10个装 82~103g",
					price: 79,
					hui:60,
					imgUrl: "image/mihoutao.jpg"
				},
				"10002": {
					id: 10002,
					title: "加拿大 多春鱼/鲜动生活 200g",
					price: 88,
					hui:65,
					imgUrl: "image/yu.jpg"
				},
				"10003": {
					id: 10003,
					title: "海南妃子笑荔枝 5斤装",
					price: 88,
					hui:70,
					imgUrl: "image/minlizhi.jpg"
				},
				"10004": {
					id: 10004,
					title: "海南三亚贵妃芒5斤装 单果50~150g 5斤（±100g） 2.5kg",
					price: 88,
					hui:66,
					imgUrl: "image/mangguo.jpg"
				},
				"10005": {
					id: 10005,
					title: "佳沛新西兰金奇异果10个装 82",
					price: 100,
					hui:99,
					imgUrl: "image/yu.jpg"
				},
				"10006": {
					id: 10006,
					title: "佳沛新西兰金奇异果10个装 82",
					price: 200,
					hui:190,
					imgUrl: "image/minlizhi.jpg"
				},
				"10007": {
					id: 10007,
					title: "佳沛新西2",
					price: 100.9,
					hui:99,
					imgUrl: "image/yu.jpg"
				},
				"10008": {
					id: 10008,
					title: "佳沛新西兰金装 82",
					price: 200.9,
					hui:190,
					imgUrl: "image/minlizhi.jpg"
				}
				

			}

			//优选必买 
			var oUl = document.getElementsByClassName("goodSelect")[0];
			
			
			//限时抢购
			var xianshi=document.getElementsByClassName("timeBye")[0];
			
			
			//主要商品			
			var mainCenter=document.getElementsByClassName("mainCenter")[0];
			var mainCenter1=document.getElementsByClassName("mainCenter")[1];
			
			
			//推荐商品
			var promote=document.getElementById("promote");
			//console.log(mainCenter)
			
			
			
			
			
			
			
			
			for(var attr in products){
				oUl.innerHTML += "<li><h2 class='cartName'>" + products[attr].title + "</h2><span>￥" + products[attr].price + "</span><a href='detail.html?id=" + attr + "'title='" + products[attr].title + "'><img class='midcartImg' src='" + products[attr].imgUrl + "'></a><input type='button' class='btn' value='添加购物车' data-id='" + attr + "'></li>";
				
				
				xianshi.innerHTML += "<div class='cartClear fl'><a href='detail.html?id=" + attr + "' title='" + products[attr].title + "'><img src='" + products[attr].imgUrl + "'></a><h4 class='title-a' >" + products[attr].title + "</h4><p>￥" + products[attr].price + "</p><p><span>会员价￥</span>" + products[attr].hui + "</p><input type='button' class='btn' value='抢购' data-id='" + attr + "'></div>";
				
			mainCenter.innerHTML += "<div class='precart fl'><a href='detail.html?id="+attr +"' class='precart1' title='" + products[attr].title +"' ><img src='" + products[attr].imgUrl + "'><p>" + products[attr].title + "</p></a><div class='buyBtn'><input type='button' class='btn' value='添加购物车' data-id='" + attr + "'></div><span class='price'>$"+ products[attr].price + "</span></div>";	
			mainCenter1.innerHTML += "<div class='precart fl'><a href='detail.html?id="+attr +"' class='precart1' title='" + products[attr].title +"' ><img src='" + products[attr].imgUrl + "'><p>" + products[attr].title + "</p></a><div class='buyBtn'><input type='button' class='btn' value='添加购物车' data-id='" + attr + "'></div><span class='price'>$"+ products[attr].price + "</span></div>";	
				
				
			promote.innerHTML += "<div class='preContent fl'><a href='detail.html?id="+attr +"' class='precart1' title='" + products[attr].title +"' ><img src='" + products[attr].imgUrl + "'><p>" + products[attr].title + "</p></a><div class='buyBtn'><input type='button' class='btn' value='添加购物车' data-id='" + attr + "'></div><span class='price'>$"+ products[attr].price + "</span></div>";		
				
				
			}

								
				
				
				
				





			//点击购物车按钮 指导原则：同种商品增数量，不同商品增种类
			//商品存到cookie中  存什么？商品ID 和 对应数量

			//cart  {10001:2,10002:3}  //cooskie存值存的是字符串类型，取值得到的也是字符串类型

			//JSON.parse();//将json格式的字符串转换成对象
			//JSON.stringify();//将json格式的对象转换成字符串
			var aBtn = document.getElementsByClassName("btn");
			var oNum = document.getElementsByClassName("nums")[0];
			var asidenum=document.getElementById("asidenum");
			if(getCookie("cart") !== undefined) {
				var obj = JSON.parse(getCookie("cart"));
			} else {
				var obj = {};
			}
			var sum = 0;
			for(var b in obj) {
				sum += obj[b];
			}

			oNum.innerHTML = sum;
			asidenum.innerHTML = sum;

 


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
					asidenum.innerHTML = sum;
					var objToStr = JSON.stringify(obj);
					console.log(objToStr)
					setCookie("cart", objToStr, 7);
					
					
					
					
					
					
					
				}
			}