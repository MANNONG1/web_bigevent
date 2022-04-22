// 每次调用ajax请求都会先调用这个函数
$.ajaxPrefilter(function(options){
    options.url='http://127.0.0.1:5500'+options.url

})