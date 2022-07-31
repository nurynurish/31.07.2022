function sum(){
event.preventDefault();
var tomatoPrice;
var tomatoAmount;
var tomatoResult;
tomatoPrice = document.getElementById("tomatoPrice").value;
tomatoAmount= document.getElementById("tomatoAmount").value;
tomatoResult = tomatoPrice * tomatoAmount;
document.getElementById("tomatoResult").innerHTML = tomatoResult;
}