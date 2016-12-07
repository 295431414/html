$(function(){
	if(!$('#loding')[0]){
		var html = '<div id="loding"><div id="loding_bg"></div><div id="loding_on" class="fa fa-circle-o-notch fa-4x fa-spin"></div></div>';
		$('body').append(html);
	}
	//判断cook
	var i=0;
	if(document.cookie.length == 0 ){
		
	}else{
		var s = $.cookie();
		$.each(s,function() {
			i++;
		});
	}
	//加载
	$('#go_top').load("../libs/load-html/goTop.html",function(){
		$('.shoop_cat em').text(i);
	}).next().load("../libs/load-html/head.html",function(){
		$('.shopcart_c').text(i);

	}).next().load("../libs/load-html/logo.html").next().load("../libs/load-html/nav.html",function(){
		$('.whole_dd').hide();
		$('.whole').hover(function() {
			$('.whole_dd').stop().slideDown()
		}, function() {
			$('.whole_dd').stop().slideUp()
		});
		$('.shopcart').click(function(){
			window.location.href = 'shopCart.html';
			$('#loding').show();
		});
		$('.login_link').click(function(){
			window.location.href = 'login.html';
			$('#loding').show();
		});
		$('.regist_link').click(function(){
			window.location.href = 'register.html';
			$('#loding').show();
		});
		$('.shoop_cat').click(function(){
			window.location.href = 'shopCart.html';
			$('#loding').show();
		});
		$('.hover').click(function(){
			window.location.href = '../index.html';
			$('#loding').show();
		});
		$('.logo a').click(function(){
			window.location.href = '../index.html';
			$('#loding').show();
		});
		$('.sea_from_btn').click(function(){
			window.location.href = 'shopList.html';
			$('#loding').show();
		});
	});
	$('#foot').load("../libs/load-html/foot.html");
})