
$(function(){

	//请求数据
	var str = $.cookie()
	var arr = [];
	$.each(str,function(index, el) {
		arr.push(index);
	});
	//console.log(arr);

	$.ajax({
		url:'../libs/json/list.json',
		success:function(text){
			var data = text.data;
			var html = '';
			for(var i=0;i<arr.length;i++){
				if($.cookie(arr[i]) != 0){
				
					for(var j=0;j<data.length;j++){
						for(var s in data[j].li){
							if(s==arr[i]){
								html = '';
								html += '<div class="wraps" name="'+arr[i]+'">';
								html += '<input type="checkbox" name="goods"/>';
								html += '<img src="../'+data[j].li.img+'"/>';
								html += '<p>'+data[j].li.p+'</p>';
								html += '<div><a class="minus" href="javascript:;">-</a>';
								html += '<b>'+$.cookie(arr[i])+'</b>';
								html += '<a class="plus" href="javascript:;">+</a></div>';
								html += '<strong>￥<i>'+data[j].li.em+'</i></strong></div>';
								$('.main_center')[0].innerHTML += html;
							}
						}
					}

				}
			}
			clicks();
			$('.foot_total em').text(count());
		}
	})


	function clicks(){
	//是否全选
	$('#select').click(function(){
		$(this).prop('checked') == true ? $('[name="goods"]').prop('checked',true):$('[name="goods"]').prop('checked',false);
	});

	//加减商品
	$('.minus').click(function(){
		var self = $(this).closest('.wraps').find('b');
		if(self.text()!=0){
			self.text(self.text()-1);
			var sum =  count();
			$('.foot_total em').text(sum);
			var names = $(this).closest('.wraps').attr('name');
			$.cookie(names,'',{expires: -1});
			$.cookie(names,self.text(),{path:"/"});
			if($.cookie(names) == '0'){
				$.cookie(names,'',{path:"/",expires:0});	
			}
			// $.cookie(names,'',{expires: -1});
			// $.cookie(names,self.text(),{path:"/"});
			// console.log(names);
		}
	});
	$('.plus').click(function(){
		var self = $(this).closest('.wraps').find('b')
		if(self.text()!=10){
			self.text(parseInt(self.text())+1);
			var sum =  count();
			$('.foot_total em').text(sum);
			var names = $(this).closest('.wraps').attr('name');
			$.cookie(names,'',{expires: -1});
			$.cookie(names,self.text(),{path:"/"});
		}
	});
	}
	clicks();

	//计算函数
	$('.foot_total em').text(count());
	function count(){
		var sum = []
		var lengs = $('.wraps').length; 
		for(var i=0;i<lengs;i++){
			sum.push($('.wraps').eq(i).find('b').text()*$('.wraps').eq(i).find('i').text());
		}
		for(var i=0;i<sum.length-1;i++){
			sum[i] = sum[i]+sum[i+1];
		}
		sum.splice(1);
		return sum;
	}

	//删除选择商品
	$('.main_foot_p a').click(function(){
		if($('#select').prop('checked')==true){
			while(!0){
				if($('[name="goods"]').eq(0).prop('checked')==true){
					var name = $('[name="goods"]').eq(0).closest('.wraps').attr('name');
					$.cookie(name,'',{path:"/",expires:0});
					$('[name="goods"]').eq(0).closest('.wraps').remove();
					$('.foot_total em').text(count());
				}else{
					break;
				}
			}
		}else{
			for(var i=0;i<$('[name="goods"]').length;i++){
				if($('[name="goods"]').eq(i).prop('checked')==true){
					var name = $('[name="goods"]').eq(i).closest('.wraps').attr('name');
					$.cookie(name,'',{path:"/",expires:0});
					$('[name="goods"]').eq(i).closest('.wraps').remove();
					$('.foot_total em').text(count());
				}
			}
		}
	});
})

window.onload = function(){

}











