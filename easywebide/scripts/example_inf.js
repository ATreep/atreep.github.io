var hostUrl = "http://atreep.github.io/easywebide";
var videoUrl = hostUrl+"/videos/";
var serverUrl = "https://venter.coding.net/p/gloriouspast/d/gloriouspast/git/raw/master/";
var boxUrl = serverUrl+"box/";
var videoType = ".webm";
var date = "2020.8.21";
var tags = {
    "ewserver": "演示 · EasyWeb Server",
    "server": "演示 · EasyWeb IDE 服务器部署",
    "explorer": "演示 · 站点管理器",
    "develop": "演示 · 提升开发效率",
	"settings":"演示 · 使用技巧",
    "easyapp":"演示 · EasyApp.js",
    "example": "在线示例",
    "help_doc": "帮助文档",
    "notic":"公告"
};
var videos=[
    "ewserver:创建站点与部署服务器",
    "ewserver:使用 JSS 脚本获取 URL 链接数据",
    "explorer:使用“站点默认格式文件夹”自动帮您分类站点文件",
    "ewserver:计数器示例",
    "develop:使用“插入”功能一键插入自定义表格",
    "develop:利用「页面预览器」面板优化你的调试方式",
    "develop:使用 EasyWeb 一键注入 Vue.js 框架",
    "settings:自定义你的「快速开始」页面",
    "server:使用 EasyWeb 搭建你的 PHP 服务器",
    "easyapp:EasyApp.js 的基本使用"
];
var docsAndNotics = [
    "example`计算器示例`exampleol/calculator",
    //"notic`EasyWeb 2.1.0 以下版本更新时闪退问题的解决方案`article/#1",
    "help_doc`一部手机+ HTML/ JS语言基础实现服务器操纵本地文件功能`https://www.coolapk.com/feed/16681488?shareKey=MzFlNjQxYmNiNmU0NWU1MDkwYTg~",
    //"help_doc`EasyWeb IDE 部署第三方PHP服务器`article/#3",
    //"notic`EasyWeb IDE 2.2.0版本将无法在应用内更新`article/#4",
    "help_doc`「快速开始」页面自定义方法表及示例`article/#5",
    "help_doc`多次连接远程服务器失败的临时解决方案`article/#6",
    "help_doc`Android System WebView 版本过低或不可用的解决方案`article/#7",
    "notic`示例征集计划`article/#8",
    "help_doc`EasyApp.js API 表`article/#9"
];
var examplesList=[
    {"name":"用户系统示例.zip","type":0,"time":"2020.8.25"},
    {"name":"餐厅点餐示例.zip","type":0,"time":"2020.8.25"},
    {"name":"QQ空间伪装登录示例.zip","type":0,"time":"2020.8.25"},
    {"name":"用户系统示例-PHPEdition.zip","type":1,"time":"2020.10.5"},
    {"name":"Microsoft风格按钮示例.zip","type":-1,"time":"2020.10.5"},
    {"name":"计数器-初学者入门示例.zip","type":0,"time":"2020.11.1"},
    {"name":"计算器.zip","type":-1,"time":"2020.11.16"},
    {"name":"百度一下.zip","type":-1,"time":"2020.12.14"},
    {"name":"MD登录及注册页面.zip","type":-1,"time":"2021.1.16"},
    {"name":"计数器-强化版.zip","type":0,"time":"2021.4.11"},
    {"name":"文件浏览器.zip","type":2,"time":"2021.7.2"},
    {"name":"爱心表白动画.zip","type":-1,"time":"2022.1.30"}
]
var examplesTypeList=[
    "HTML 站点",
    "依赖于 EasyWeb Server 的 HTML 站点",
    "PHP 站点",
    "EasyApp.js 项目",
    "其他类型站点"
];