var result=document.getElementById( "result" );

var nums=new Array();

var nowresult="0";

function reflect()
{
  	if(nowresult=="Err")
    	result.innerHTML="<code style='color:#FF0000'>错误</code>";
    else
		result.innerHTML=nowresult;
}


var insert=function (text)
{
  	if(nowresult=="0"||nowresult=="Err")
    	nowresult="";
	nowresult+=text;
 	
 	reflect();
}

function cResult()
{
	nowresult="0";
 	reflect();
}

function backspace()
{
	if(nowresult.length>1&&nowresult!="0"&&nowresult!="Err"&&nowresult!="")
   	{
    	nowresult=nowresult.substring(0,nowresult.length-1);
    }
  	else
   	{
    	nowresult="0";
    }
  	reflect();
}

function getResult()
{
	nowresult=eval(nowresult);
 	if(nowresult=="Infinity")
    {
    	nowresult="Err";
    }
 	reflect();
}

for(i=0;i<17;i++)
{
	nums.push(document.getElementById( "n"+i ));
 	nums[i].onclick=insert.bind(this,nums[i].innerText);
}
