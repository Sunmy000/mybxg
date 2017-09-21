define(['jquery','template'],function ($,template) {
  //调用后台接口获取所有讲师数据
    $.ajax({
      type : 'get',
      url : '/api/teacher',
      dataType: 'json',
      success : function (data) {
        //解析数据，渲染页面
        var html = template('teacherTpl',{list:data.result});
        $('#teacherInfo').html(html);
        //启用和注销功能
        $('.eod').click(function () {
          var td = $(this).closest('td');
          var tcId = td.attr('data-tcId');
          var tcStatus = td.attr('data-status');
          var that = this;
          //调用后台接口
          $.ajax({
            type : 'get',
            url : '/api/teacher/handle',
            data : {tc_id : tcId, tc_status : tcStatus},
            success : function (data) {
              if (data.code == 200) {
                td.attr('data-status', data.result.tc_status);
                //因为是设置纯文本内容所以使用text()方法
                $(that).text(data.result.tc_status ==0?'启用':'注销');

              }
            }
          });
        });
      }
    });
});
