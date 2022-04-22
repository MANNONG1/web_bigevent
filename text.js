var layer=layui.layer
    var data={username:$('#form_reg [name=username]').val(),password:$('#form_reg[name=password]').val()}
    $('#from_reg').on('submit', function(e){
        // 1.阻止默认提交
        e.preventDefault()
        // 2.发起ajax请求
        console.log(data);
        $.ajax({
            url:'http://127.0.0.1:2000/api/reguser',
            data:$(this).serialize(),
            type:'POST',
            datatype:'jsonp',
            success:function(res){
            if(res.status !== 0){
                return layer.msg(res.message)
            }
            layer.msg('注册成功！')
        }})
    })