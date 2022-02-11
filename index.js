//Declaring all variables

var mins = document.getElementById("mins");
var secs = document.getElementById("secs");

var mincount=0;
var seccount=0;

var btnstart= document.querySelector(".start");
var btnstop= document.querySelector(".stop");
var btnreset= document.querySelector(".reset");
var interval;

// Animation when the buttons are clicked
for(var i=0;i<document.querySelectorAll(".switch").length;i++)
{
    document.querySelectorAll(".switch")[i].addEventListener("click",mouseClick);

    function mouseClick()
    {
        var buttonhtml = this.innerHTML;
        buttonanimation(buttonhtml);
    }
    
}

function buttonanimation(key)
{
    var active = document.querySelector("." + key);
    active.classList.add("btn-click");

    setTimeout(function()
    {
        active.classList.remove("btn-click");
    } , 100);
}

//Behaviour of each button defined

btnstart.addEventListener("click", function(){
   interval = setInterval(startClock, 100); 
  
});

btnstop.addEventListener("click", function(){
    clearInterval(interval);
});
btnreset.addEventListener("click", function(){
    mincount=0;seccount=0;
    mins.innerHTML=secs.innerHTML="0"+mincount;
});

function startClock()
{
    seccount++;
    if(seccount<9)
    secs.innerHTML= "0" + seccount;
    if(seccount>9 && seccount <60)
    secs.innerHTML= seccount;
    if(seccount>=60)
    {
        mincount++;
        if(mincount<9)
        mins.innerHTML = "0" + mincount;
        if(mincount>9)
        mins.innerHTML = mincount;
        seccount=0;
        secs.innerHTML= "0"+seccount;
        
        
    }
}



