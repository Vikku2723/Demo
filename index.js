function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="Am";
    if (hh>=12)
    {
        am_pm="Pm"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${ss} ${am_pm}`
   // document.getElementById("Time").innerHTML=fullTime;
    if(mo==0)
    {
        mo="JAN"
    }
    else if(mo==1)
    {
        mo="FEB"
    }
    else if(mo==2)
    {
        mo="MAR"
    }
    else if(mo==3)
    {
        mo="APR"
    }
    else if(mo==4)
    {
        mo="MAY"
    }
    else if(mo==5)
    {
        mo="JUN"
    }
    else if(mo==6)
    {
        mo="JUL"
    }
    else if(mo==7)
    {
        mo="AUG"
    }
    else if(mo==8)
    {
        mo="SEP"
    }
    else if(mo==9)
    {
        mo="OCT"
    }
    else if(mo==10)
    {
        mo="NOV"
    }
    else 
    {
        mo="DEC"
    }
   // var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fullTime
    switch(day)
    {
        case 0:day="Sunday"
        document.body.style.backgroundColor="red"
        break;
        case 1:day="Monday"
        document.body.style.backgroundColor="green"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundColor="blue"
        break;
        case 3:day="Wednsday"
        document.body.style.backgroundColor="yellow"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundColor="brown"
        break;
        case 5:day="Friday"
        document.body.style.backgroundColor="gray"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundColor="orange"
        break;
        
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000)
}
function greet()
{
    var date=new Date();
    var hh=date.getHours()
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="GoodMorning";
        document.getElementById("bgvid").src="./sunrise.mp4"
    }
}