var nav = document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var ele = document.createElement("div");
var x = document.getElementById(".butt");
x.addEventListener("click", SecondFunction);

var totaldamage= 0;
var damage1 = 0;

var pages = [
  {
    title:"Home",
    content:"Home"
  },
  {
    title:"About",
    content:"About"
  },
  {
    title:"Interact",
  }
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button");
  this.button.addEventListener("click", function(){
  writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg=="Home"){
    writePage3();
  }else if (pg=="Interact"){
    writePage();
  }else{
    writePage2();
  }
}
  
function writePage(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  var Counter = document.createElement("div");
  heading.innerHTML="Interact";
  Counter.innerHTML="Increase this number by one!----> " + totaldamage;
  display.appendChild(heading);
  display.appendChild(Counter);
  document.getElementById(".butt").style.visibility='visible'
}

function writePage2(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  var name = document.createElement("h3");
  name.innerHTML="Nathan";
  heading.innerHTML="About";
  display.appendChild(heading);
  display.appendChild(name);
  document.getElementById(".butt").style.visibility='hidden';
}
  
function writePage3(){
  display.innerHTML="";
  var heading = document.createElement("h1");
  heading.innerHTML="Home";
  display.appendChild(heading);
  document.getElementById(".butt").style.visibility='hidden';
}

function SecondFunction() {
   damage1 = 1;
    add(damage1);
} 

function add(damage1){
  totaldamage= totaldamage + damage1;
  display.innerHTML="";
  var heading = document.createElement("h1");
  var Counter = document.createElement("div");
  heading.innerHTML="Interact";
  Counter.innerHTML="Increase this number by one!----> " + totaldamage;
  display.appendChild(heading);
  display.appendChild(Counter);
}

writeStuff(pages[0].content, "Home");