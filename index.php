<?php
header('content-type:text/html; charset=utf8;'); 
  // include('./views/main/login.html');
  //根据url中的特征用户想访问哪个页面

  // include('./views'.$path.'.html');
  //默认目录名称
$dir = 'main';
  //默认文件名称
$filename = 'index';

if (array_key_exists('PATH_INFO', $_SERVER)) {
    //路径存在
  $path = $_SERVER['PATH_INFO'];
    //截取字符串
  $str = substr($path, 1);
    //分割字符串方法
  $ret = explode('/', $str);
  if (count($ret) == 2) {
      // 两层路径
      // 覆盖默认路径
    $dir = $ret[0];
    // 覆盖默认路径
    $filename = $ret[1];
  }else {
    // 其他情况统一跳转到登陆页面
    $filename = 'login';
  }
}
// 嵌入子页面
    include('./views/'.$dir.'/'.$filename.'.html');
?>
