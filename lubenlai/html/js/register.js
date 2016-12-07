$(function(){
    //加载页头尾
    $('#foot').load('../libs/load-html/foot.html');
    $('#head').load('../libs/load-html/login-head.html',function(){
        $('#head span a').click(function(){
            $('#loding').show();
            $(this).prop('href',"login.html");
        });
    });
    //随机验证码
    function math(){
        $('#ver_btn').text('');
        for(var i=0;i<6;i++){
            $('#ver_btn').text($('#ver_btn').text()+parseInt(Math.random()*10));
        }
    }
    math();
    $('#ver_btn').click(function(){
        math();
    });
	//清空函数
    function empty(){
        $(':text').val('');
        $(':password').val();
    }
    //切换注册方式
	$('.tab_phone_email').find('a').click(function(){
		$('.tab_phone_email').find('a').removeClass();
		$(this).addClass('hover');
        empty();
		if($(this).prop('name')=='phones'){
			$('.agr').siblings().find('label').text('');
			$('.email').css('display','none');
			$('.phone').css('display','block');
		}else{
			$('.agr').siblings().find('label').text('');
			$('.email').css('display','block');
			$('.phone').css('display','none');
		}
	});
    //判断插件
    $("form").validate({
            errorPlacement: function(error, element) { 
                element.closest('div').next().text(error.text());
            },
            ignore:".verification",
            onfocusout: function(element){
                $(element).valid();
                if($(element).valid()){
                    $(element).closest('div').next().text('');
                }
            },
            rules:{
                    username:{
                        required:true
                    },
                    password:{
                        required:true,
                        rangelength:[3,10]
                    },
                    passwords:{
                        required:true,
                        equalTo:"#password"
                    },
                    phone:{
                        digits:true,
                        rangelength:[11,11]
                    }               
            },
            messages:{
                    username:{
                        required:"必填"
                    },
                    password:{
                        required: "不能为空",
                        rangelength: "密码最小长度:3, 最大长度:10。"
                    },
                    passwords:{
                        required:"不能为空",
                        equalTo:"两次密码输入不一致"
                    },
                    phone:{
                        digits:"只能是数字",
                        rangelength:"手机号码只能是11位数值"
                    }                                
            }
        });
	//表单提交
	$(':button').click(function(){
        //判断邮箱或者

        //如果是电话注册
		if($('.phone').css('display') =='block' && $('[name="verification"]').val()!=$('#ver_btn').text()){
			$('label[for="verification"]').text('验证码错误');
		}else{
            if($('form').valid()){
                alert('注册成功');
                $('#loding').show();
                window.location.href = 'login.html';
                return;
            }
        }
        //如果是邮箱注册
        if($('.email').css('display')=='display' && $('[name="email"]').val() == ''){
            $('label[for="email"]').text('请输入邮箱');
        }else{
            if($('form').valid()){
                alert('注册成功');
                $('#loding').show();
                window.location.href = 'login.html';
                return;
            }
        }
		return false;
	});
})