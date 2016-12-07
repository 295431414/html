$(function(){
	$('#head').load('../libs/load-html/login-head.html',function(){
		 $('#head').css('border-bottom','none').find('span').remove();
	});
	$('#foot').load('../libs/load-html/foot.html');
	$('form').validate({
		errorPlacement: function(error, element) { 
    		element.closest('form').find('.login_wrap_error').text(error.text());
		},
		onfocusout: function(element){
            $(element).valid();
            if($(element).valid()){
                $(element).closest('form').find('.login_wrap_error').text('');
            }
        },
		rules:{
            username:{
                required:true
            },
            password:{
            	required:true
            }
        },
        messages:{
        	username:{
        		required:"请输入用户名"
        	},
        	password:{
            	required:"请输入密码"
            }
        }
	});
	$('.login_regist').click(function(){
		$('#loding').show();
		window.location.href = 'register.html';
	});
	$(':button').click(function(){
		if($('form').valid()){
            alert('登录成功，正在返回首页！')
            $('#loding').show();
            window.location.href = '../index.html';
        }
		return;
	});
})