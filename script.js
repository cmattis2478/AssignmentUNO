function playGame(){

let choices=["Rock","Paper","Scissors","Spock"];
let computerChoice=choices[Math.floor(Math.random()*4)];

let userChoice=document.querySelector('input[name="choice"]:checked').value;

document.getElementById("userChoice").innerHTML=userChoice;
document.getElementById("computerChoice").innerHTML=computerChoice;

if(computerChoice==="Spock"){
alert("LOSSSERRR!");
document.body.style.background="red";
return false;
}

if(userChoice===computerChoice){
alert("Tie");
document.body.style.background="blue";
return false;
}

if(
(userChoice==="Rock" && computerChoice==="Scissors")||
(userChoice==="Paper" && computerChoice==="Rock")||
(userChoice==="Scissors" && computerChoice==="Paper")
){
alert("WINNERR");
document.body.style.background="green";
}else{
alert("LOSSSERRR");
document.body.style.background="red";
}

return false;
}

function validateForm(){

let text=document.getElementById("message").value;

let regex=/^[a-zA-Z0-9\s]+$/;

if(!regex.test(text)){
alert("No special characters allowed");
return false;
}

window.location.href="success.html";
return false;
}
