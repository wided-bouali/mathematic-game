//i write some varibal for any thing gonna change.
var num1;
var num2;
var guess;
var answer;
var response;
var pass= [];
// i use here if condition with alert ;if we answer at 3 question it will give us an alert and mouve automaticly to the next challenge.
$("#submitbutton").on("click",function(){
	pass.push(document.getElementById("inputfield").value);
    if(pass.length === 3){
    	alert("you guesed 3 right congratulations")
    	window.location.href = "file:///C:/Users/Toshiba/Desktop/project1/multiplication/index.html";
    }
   
});

//i use jquery,when the html page finish to loading this function gonna work. 
$(document).ready(function(){
  num1= document.getElementById("num1");
  num2= document.getElementById("num2");
  guess= document.getElementById("inputfield");
  response= document.getElementById("response");
 //i invoke the submitbutton with jqquery to chek the answer.  
$("#submitbutton").click(function(){
  checkAnswer();
});
setNumbers();
});
//i use random to change the number every time and floor to make it one number,because random is like(0.54541554).
function setNumbers(){
  num1.innerHTML=Math.floor(Math.random()* 10) + 1;
  num2.innerHTML=Math.floor(Math.random()* 10) + 1; 
}//i write 2 new var and i use parseInt() to convert those values to integers first and then add the values.
// i write a function with if condition that return 'good' if the answer is right else return 'oups try again' if the aswer is wrong.
function checkAnswer(){
  var n1 = parseInt(num1.innerHTML);
  var n2 = parseInt(num2.innerHTML);
  answer = n1 + n2;
  if(parseInt(guess.value)=== answer){
    response.innerHTML="<div class='right'>good!</div>";
    setNumbers();
  }
  else{
    response.innerHTML="<div class='wrong'>oups try again!</div>";
  }
}
