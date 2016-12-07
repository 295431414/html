var str = window.location.search;
str = str.split("=");
$(function(){

	//取参数
	// var str = window.location.search;
	// str = str.split("=");
	//请求数据
	$.ajax({
		url:'../libs/json/list.json',
		success:function(text){
			var data = text.data;
			for(var i=0;i<data.length;i++){
				var datas = data[i].li;
				for(var s in datas){
					if(s==str[1]){
						$('.l_pic img').prop('src','../'+datas.img);
						$('.l_pic_foot img').prop('src','../'+datas.img);
						$('.main_c h3').text(datas.p);
						$('.s1 em').text('￥'+datas.em);
						$('.s2 em').text('￥'+datas.span);
						$('.wrap p').text(datas.p);
						$('.wrap img').prop('src','../'+datas.img);
					}
				}
			}
		}
	})
})
window.onload = function(){
	//加入购物车
	$('.buy_r').click(function(){
		if($.cookie(str[1])){
			alert('已经添加到购物车了!');
		}else{
			$.cookie(str[1],1,{path:'/'});
			$('.shoop_cat em').text(parseInt($('.shoop_cat em').text())+1);
			$('.shopcart_c').text(parseInt($('.shopcart_c').text())+1);
			alert('添加购物车成功!');
		}
	})
}