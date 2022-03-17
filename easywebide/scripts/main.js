var tab = document.getElementById("tab");
var videos_btn=document.getElementById("videos_btn");
var articles_btn=document.getElementById("articles_btn");
var examples_btn=document.getElementById("examples_btn");
var listview = document.getElementById("listview");
var video_cup = document.getElementById("video_cup");

function watch(video_url) {
    video_cup.innerHTML = "<div><span style='color:white;font-size:small;paddings:10px;cursor:default;'>点击外部关闭视频</span></div><br><video autoplay controls height='80%' src='" + video_url + "'></video>";
    video_cup.style.display = "";
}

function selectbtn(id)
{
    var btn=document.getElementById(id);
    videos_btn.style.backgroundColor="#FF8100";
    videos_btn.style.cursor="pointer";
    videos_btn.setAttribute("onclick","javascript:showVideosList()");
    articles_btn.style.backgroundColor="#FF8100";
    articles_btn.style.cursor="pointer";
    articles_btn.setAttribute("onclick","javascript:showArticlesList()");
    examples_btn.style.backgroundColor="#FF8100";
    examples_btn.style.cursor="pointer";
    examples_btn.setAttribute("onclick","javascript:showExamplesList()");
    btn.removeAttribute("onclick");
    btn.style.backgroundColor="#5C5C5C";
    btn.style.cursor="default";
}

function showVideosList() {
    listview.innerHTML = "";
    selectbtn("videos_btn");
    {
        {
            //Load ListView
            for (i = 0; i < videos.length; i++) {
                var code = videos[i].split(":");
                var name = code[1];
                var type = tags[code[0]];
                var item = "<div class='mdui-ripple mdui-ripple-"+(window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black")+"' onclick='watch(\"" + (videoUrl + i + videoType) + "\")' style='background-color:#a3a3a3a4;padding:10px;margin:10px;border-radius:10px;cursor: pointer;'><b font-size:large;text-align:center;'>" + name + "</b><br><code style='font-size:small;opacity: 0.8;text-align:center;'>" + type + "</code></div>";
                listview.innerHTML = item + listview.innerHTML;
            }
        }
    }
}
function showArticlesList() {
    listview.innerHTML = "";
    selectbtn("articles_btn");
    {
        for (i = 0; i < docsAndNotics.length; i++) {
            var code = docsAndNotics[i].split("`");
            var name = code[1];
            var type = tags[code[0]];
            var url = code[2];
            var item = "<div class='mdui-ripple mdui-ripple-"+(window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black")+"' onclick='window.open(\"" + url + "\")' style='background-color:#a3a3a3a4;padding:10px;margin:10px;border-radius:10px;cursor: pointer;'><b font-size:large;text-align:center;'>" + name + "</b><br><code style='font-size:small;opacity: 0.8;text-align:center;'>" + type + "</code></div>";
            listview.innerHTML = item + listview.innerHTML;
        }
    }
}
function showExamplesList() {
    listview.innerHTML = "";
    selectbtn("examples_btn");
    {
        for (i = 0; i < examplesList.length; i++) {
            var obj = examplesList[i];
            var name = obj["name"];
            var realName = name.substring(0,name.lastIndexOf("."));
            var type = examplesTypeList[obj["type"]+1];
            var time = obj["time"];
            var url = serverUrl + "server/easyweb/examples/" + name;
            var item = "<div class='mdui-ripple mdui-ripple-"+(window.matchMedia('(prefers-color-scheme: dark)').matches ? "white" : "black")+"' onclick='window.open(\"" + url + "\")' style='background-color:#a3a3a3a4;padding:10px;margin:10px;border-radius:10px;cursor: pointer;'><b font-size:large;text-align:center;'>" + realName + "</b><br><code style='font-size:small;opacity: 0.8;text-align:center;'>" + type + " • " + time + "</code></div>";
            listview.innerHTML = item + listview.innerHTML;
        }
        var submit="<div class='mdui-ripple mdui-ripple-white' onclick='window.open(\"article/#8\")' style='background-color:#0482E1;padding:10px;margin:10px;border-radius:20px;cursor: pointer;color: white;'>投稿我的作品</div>";
        listview.innerHTML = submit + "<br>" + listview.innerHTML;
    }
}
{
    showVideosList();
}