var num1;
var num2;
var guess;
var answer;
var response;
var pass= [];
$("#submitbutton").on("click",function(){
  pass.push(document.getElementById("inputfield").value);
    if(pass.length === 3){
      alert("you guesed 3 right congratulations")
      window.location.href = "file:///C:/Users/Toshiba/Desktop/project1/substraction/index.html";
    }
   
});
$(document).ready(function(){
  num1= document.getElementById("num1");
  num2= document.getElementById("num2");
  guess= document.getElementById("inputfield");
  response= document.getElementById("response");
$("#submitbutton").click(function(){
  checkAnswer();
});
setNumbers();
});
function setNumbers(){
  num1.innerHTML=Math.floor(Math.random()* 10) + 1;
  num2.innerHTML=Math.floor(Math.random()* 10) + 1; 
}
function checkAnswer(){
  var n1 = parseInt(num1.innerHTML);
  var n2 = parseInt(num2.innerHTML);
  answer = n1 / n2;
  if(parseInt(guess.value)=== answer){
    response.innerHTML="<div class='right'>good!</div>";
    setNumbers();
  }
  else{
    response.innerHTML="<div class='wrong'>oups try again!</div>";
  }
}


