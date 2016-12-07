$(function(){
	$.ajax({
		url:"../libs/json/list.json",
		success:function(text){
			if(text){
				var data = text.data;
				var html = '';
				for(var i=0;i<data.length;i++){
					var datas = data[i].li;
					html += "<li id='li"+i+"'>";
					html += '<img src="../'+datas.img+'" alt=""/>';
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
				//main的右边框
				for(var i=0;i<=$('.main_main li').length;i++){
					if(i%4==0 && i!=0){
						$('.main_main li').eq(i).addClass('last');
					}
					$('.main_main li').eq(i).click(function(){
						window.location.href = 'commodity.html'+'?id='+$(this).prop('id');
						$('#loding').show();
					});
				}
			}
		}
	})
})