function getQinMingJieDate(fullYear){
    //清明节的日期是不固定的，规律是：闰年开始的前2年是4月4日，闰年开始的第3年和第4年是4月5日
    if(isLeapYear(fullYear) || isLeapYear(fullYear -1)){
        return '4:4';
    }
    else{
        return '4:5';
    }
}
//判断是否是闰年
function isLeapYear (Year){
    if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)){
        return (true);
    }
    else{
        return (false);
    }
}

var date = new Date();
var year=date.getYear();
var month=(date.getMonth()+1)+"";
var day=(date.getDate())+"";
if(month+":"+day==getQinMingJieDate(year))
{
	//今天是清明节。
    console.log("qm");
    var bar = document.getElementById( "title_bar" );
    bar.style.backgroundColor="#595959";
}
else
{
	console.log("not qm");
    console.log(getQinMingJieDate(year));
    console.log(month+":"+day);
}