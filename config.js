/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var domain = "此处写后台接口url";

var prefix = '/api/v1';

var host = domain + prefix;

var config = {

  // 下面的地址配合云端 Server 工作
  host,
  // 我的/我的积分页面
  Integral:'pages/Integral/Integral'
}