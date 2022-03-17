var titlebar = document.createElement('div');
titlebar.className = "titlebar";
titlebar.id = "title_bar";
var band = document.createElement('img');
band.src = "../../image/easyweb_band.png";
band.height = 40;
titlebar.appendChild(band);

var links = document.createElement('div');
links.setAttribute("style", "text-align: center;");
//Venter
var innerBtn = document.createElement('button');
innerBtn.className = "mdui-btn mdui-btn-icon mdui-ripple";
innerBtn.style.backgroundColor = "#1DC9FF";
innerBtn.style.margin = "10px 10px 10px 10px";
innerBtn.setAttribute("onclick", "javascript:window.open('../../../index.html')");
var innerIcon = document.createElement('img');
innerIcon.src = "../../../imgs/venterlogoW.svg";
innerIcon.width = 20;
innerBtn.appendChild(innerIcon);
links.appendChild(innerBtn);
//EasyWeb IDE
var innerBtn = document.createElement('button');
innerBtn.className = "mdui-btn mdui-btn-icon mdui-ripple";
innerBtn.style.backgroundColor = "#ffe8d0";
innerBtn.style.margin = "10px 10px 10px 10px";
innerBtn.setAttribute("onclick", "javascript:window.open('../../index.html')");
var innerIcon = document.createElement('img');
innerIcon.src = "../../../imgs/easyweb.png";
innerIcon.width = 20;
innerBtn.appendChild(innerIcon);
links.appendChild(innerBtn);
//Chat
var innerBtn = document.createElement('button');
innerBtn.className = "mdui-btn mdui-btn-icon mdui-ripple";
innerBtn.style.backgroundColor = "#7620ff";
innerBtn.style.margin = "10px 10px 10px 10px";
innerBtn.setAttribute("onclick", "javascript:window.open('https://jq.qq.com/?_wv=1027&k=n91bg1DW')");
var innerIcon = document.createElement('i');
innerIcon.className = "mdui-icon material-icons"
innerIcon.innerHTML = "chat_bubble_outline";
innerIcon.style.color = "#fff";
innerBtn.appendChild(innerIcon);
links.appendChild(innerBtn);

var unpageScript = document.createElement('script');
unpageScript.src = "../../../scripts/unpage.js";

document.body.appendChild(titlebar);
document.body.appendChild(links);
document.body.appendChild(document.createElement('copyright'));
document.body.appendChild(unpageScript);

document.body.getElementsByTagName("div")[0].style.padding="20px 20px 20px 20px"

window.onload = function() {
    var ad = document.getElementById("title_bar");
    var gao = ad.offsetHeight - 0; 
    var body = document.body;
    body.style.paddingTop = gao + "px";
};

try
{
    hljs.initHighlightingOnLoad();
}
catch{}