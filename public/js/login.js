define(['jquery','cookie'], function ($) {
  //实现登陆功能
  $('#loginBtn').click(function () {
    $.ajax({
      url: '/api/login',
      type: 'post',
      data: $('#loginForm').serialize(),
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
                  //存储用户登录之后的信息
                  $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                  // 登陆成功，跳转到主页面
                  location.href = '/main/index';
                }
              }
            });
      return false; //阻止默认行为（在jquery中既阻止默认行为又阻止冒泡，而在原生js中只阻止默认行为不阻止冒泡）
    })
});
