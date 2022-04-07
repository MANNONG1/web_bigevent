// 每次调用ajax请求都会先调用这个函数
$.ajaxPrefilter(function(options){
    options.url='http://ajax.frontend.itheima.net'+options.url

})