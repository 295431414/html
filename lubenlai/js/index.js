$(function(){

	var i=0;
	if(document.cookie.length == 0 ){
		
	}else{
		var s = $.cookie();
		$.each(s,function() {
			i++;
		});
	}
	//加载页头页尾
	$('#go_top').load("libs/load-html/goTop.html",function(){
		$('.shoop_cat em').text(i);

	}).next().load("libs/load-html/head.html",function(){
		$('.shopcart_c').text(i);
	}).next().load("libs/load-html/logo.html").next().load("libs/load-html/nav.html",function(){
		
	});
	

	//页尾
	$('#foot').load("libs/load-html/foot.html",function(){
		$('#foot').css('border','0');
		$('#foot b').remove();
		for(var i=1;i<=5;i++){
			$('.footer_img img').eq(i-1).prop('src','img/public/banquan_'+i+'.jpg');
		}
	});

	//加载列表
	$.ajax({
		url:"libs/json/list.json",
		success:function(text){
			if(text){
				var data = text.data;
				var html = '';
				for(var i=0;i<data.length;i++){
					var datas = data[i].li;
					html += "<li id='li"+i+"'>";
					html += '<img src="'+datas.img+'" alt=""/>';
					html += '<p><a href="javascript:;">'+datas.p+'</a></p>';
					html += '<div class="main_mon">';
					html += '<em><i>￥</>'+datas.em+'</em>';
					html += '<span>￥'+datas.span+'</span>';
					html += '</div></li>';
				}
				$('.main_main ul').html(html);
				var sum = Math.ceil(text.total/text.number);
				html = '';
				for(var i=0;i<sum;i++){
					html += '<a href="javascript:;">'+(i+1)+'</a>';
				}
				$('.main_number').html(html);
				$('.main_number a').eq(0).css('background','#ddd');
				//main的右边框
				for(var i=0;i<=$('.main_main li').length;i++){
					if(i%4==0 && i!=0){
						$('.main_main li').eq(i).addClass('last');
					}
					$('.main_main li').eq(i).click(function(){
						window.location.href = 'html/commodity.html'+'?id='+$(this).prop('id');
						$('#loding').show();
					});
				}
			}
		}
	})
})
//资源加载
$(window).load(function(){
	//轮播图
	var i = 0;
	$('.banner_pic_pic li').css('display','none').eq(0).css('display','block');
	var temp = setInterval(fn,3000);

	function fn(){
		i++;
		i >2 ?i=0:i;
		$('.banner_pic_pic li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$('.banner_pic_nav a').removeClass().eq(i).addClass('hover');
	}
	$('.banner_pic_nav a').click(function(){
		clearInterval(temp);
		i = parseInt($(this).prop('name'))-1;
		$('.banner_pic_nav a').removeClass().eq(i).addClass('hover');
		$('.banner_pic_pic li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
		temp = setInterval(fn,3000);
	});

	//切换图
	$('.banner_pic_foot_pic')[0].innerHTML += $('.banner_pic_foot_pic').html();
	var widths = $('.banner_pic_foot_pic li').length*$('.banner_pic_foot_pic li').eq(0).width();
	$('.banner_pic_foot_pic').width(widths);
	$('.banner_pic_foot_pic').css('left',-widths/2);
	var num = 0;
	num = $('.banner_pic_foot_pic li').length/2;
	//上一张
	$('.prev').click(function(){
		if(num==0){
			num = $('.banner_pic_foot_pic li').length/2;
			widths = -num*$('.banner_pic_foot_pic li').eq(0).width();
			$('.banner_pic_foot_pic').stop().css({left:widths});
		}
		num--;
		widths = -num*$('.banner_pic_foot_pic li').eq(0).width();
		$('.banner_pic_foot_pic').stop().animate({left:widths},function(){
		
		})
	});
	//下一张
	$('.next').click(function(){
		if(num>=$('.banner_pic_foot_pic li').length/2){
			num = 0;
			widths = -num*$('.banner_pic_foot_pic li').eq(0).width();
			$('.banner_pic_foot_pic').stop().css("left",widths);
		}

		num++;
		widths = -num*$('.banner_pic_foot_pic li').eq(0).width();
		$('.banner_pic_foot_pic').stop().animate({left:widths},function(){
			
		})
	});
	$('.shopcart').click(function(){
		window.location.href = 'html/shopCart.html';
		$('#loding').show();
	});
	$('.login_link').click(function(){
		window.location.href = 'html/login.html';
		$('#loding').show();
	});
	$('.regist_link').click(function(){
		window.location.href = 'html/register.html';
		$('#loding').show();
	});
	$('.shoop_cat').click(function(){
		window.location.href = 'html/shopCart.html';
		$('#loding').show();
	});
	$('.hover').click(function(){
		window.location.href = 'index.html';
		$('#loding').show();
	});
	$('.logo').click(function(){
		window.location.href = 'index.html';
		$('#loding').show();
	});
	$('.sea_from_btn').click(function(){
		window.location.href = 'html/shopList.html';
		$('#loding').show();
	});
});