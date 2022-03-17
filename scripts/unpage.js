//控制标题栏
function showTitleBarLine() {
    var titlebar = document.getElementById("title_bar");
    titlebar.style.borderBottom = "1px solid rgba(128, 128, 128, 0.445)";
    var backgroundColor = "rgba(255,255,255,0.753)";
    try {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            backgroundColor = "rgba(73,73,73,0.753)";
        }
    }
    catch (e) { }
    titlebar.style.backgroundColor = backgroundColor;
    titlebar.style.backdropFilter="saturate(5) blur(20px)";
}
function inTitleBarLine() {
    var titlebar = document.getElementById("title_bar");
    if (document.documentElement.scrollTop != 0 && document.documentElement.clientHeight <= document.documentElement.offsetHeight) {
        //No scrollbar
        showTitleBarLine();
    }
    else {
        titlebar.style.borderBottom = "";
        titlebar.style.backgroundColor = "";
        titlebar.style.backdropFilter="";
    }
}
function applyTitleBar() {
    var titlebar = document.getElementById("title_bar");
    window.onscroll = function () {
        inTitleBarLine();
    };
    window.onload = inTitleBarLine;
    window.onresize = inTitleBarLine;
}

function applyVenterButtons() {
    var allBtnsArray = document.getElementsByTagName("vbtn");
    for (var i = 0; i < allBtnsArray.length; i++) {
        var btn = allBtnsArray[i];
        var link = btn.getAttribute("href");
        btn.removeAttribute("href");
        var align = btn.getAttribute("align");
        btn.removeAttribute("align");
        var show = btn.getAttribute("show");
        btn.removeAttribute("show");
        var bgcolor = btn.getAttribute("bgcolor");
        btn.removeAttribute("bgcolor");
        if(bgcolor==null)
            bgcolor="#a3a3a3a4";
        var text = btn.innerText;
        var vbtn = document.createElement("div");
        var span = document.createElement("span");
        span.setAttribute("class", "vButton");
        if (show == null) {
            vbtn.setAttribute("onclick", "javascript:window.open('" + link + "')");
            vbtn.setAttribute("class", "mdui-ripple mdui-ripple-" + (window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black") + " v");
            span.style.backgroundColor = bgcolor;
        }
        else {
            vbtn.setAttribute("class", "mdui-ripple mdui-ripple-" + show + " vShower");
            vbtn.style.borderColor = show;
            vbtn.style.color = show;
        }
        span.innerText = text;
        vbtn.appendChild(span);
        btn.innerText = "";
        btn.appendChild(vbtn);
        switch (align) {
            case "left":
                vbtn.style.margin = "0 auto 0 0";
                break;
            case "right":
                vbtn.style.margin = "0 0 0 auto";
                break;
            default:
                vbtn.style.margin = "0 auto 0 auto";
                break;
        }

        vbtn.style.width = span.offsetWidth + "px";
    }
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
        default:
            return 0;
            break;
    }
}

function applyCopyrightBar(){
    var allArray = document.getElementsByTagName("copyright");
    for(var i = 0;i < allArray.length;i++){
        var each = allArray[i];
        each.setAttribute("class", "copyrightblock");
        each.innerText = "Copyright © 2022 Treep.";
    }
}
applyTitleBar();
applyVenterButtons();
applyCopyrightBar();