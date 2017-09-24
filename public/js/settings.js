define(['jquery','template','uploadify'],function ($, template) {
  //调用接口获取所有的个人信息
  $.ajax({
    type : 'get',
    url : '/api/teacher/profile',
    dataType : 'json',
    success : function (data) {
      //解析数据，渲染页面
      var html = template('settingsTpl',data.result);
      $('#settingsInfo').html(html);
      //处理头像上传
      $('#upfile').uploadify({
        width : 120,
        height : 120,
        // 隐藏文字
        buttonText : '',
        // 隐藏进图条
        itemTemplate : '<span></span>',
        swf: '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        fileObjName : 'tc_avatar',
        onUploadSuccess : function (a, b) {
          b=b.trim();
          b = JSON.parse(b);
          $('.preview img').attr('src',b.result.path);
        }
      });
    }
  });
})
