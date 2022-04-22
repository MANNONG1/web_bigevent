$(function(){
// 登入跳转
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
// 注册跳转

    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
    // 从layui获取form
    var form=layui.form
    form.verify({
        
        repwd: function (value) {
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致!'
            }
        }
        ,pwd:[
            /^[\S]{6,12}$/
            ,'密码必须6到12位,且不能出现空格'
          ] 
        
        
    })
    // 监听注册表单的提交事件
    var layer=layui.layer
    var data={username:$('#form_reg [name=username]').val(),password:$('#form_reg[name=password]').val()}
    $('#from_reg').on('submit', function(e){
        // 1.阻止默认提交
        e.preventDefault()
        // 2.发起ajax请求
        $.post('/api/reguser',data, function(res){
            if(res.status !== 0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功！')
            // 模拟人的点击
            $('#link_login').click()
        })
    })
    $('#from_login').submit(function(e){
        // 1.阻止默认提交
        e.preventDefault()
        // 2.发起ajax请求
        $.ajax({
            url:'/api/login',
            method: 'POST',
            // 快速获取消息
            data:$(this).serialize(),
            success:function(res){
                if(res.status !== 0){
                    return layer.msg(res.message)
                }
                layer.msg('登入成功！')
                // 将登入成功得到的 token 字符串，保存到localStorage中
                LocalStorage.setItem('token',res.token)
                // 跳转后台主页
                location.herf='/index.html'
            }
        })
    })
})
