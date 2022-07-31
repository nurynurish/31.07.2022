function sum(){
event.preventDefault();
var tomatoPrice;
var tomatoAmount;
var tomatoResult;
tomatoPrice = document.getElementById("tomatoPrice").value;
tomatoAmount= document.getElementById("tomatoAmount").value;
tomatoResult = tomatoPrice * tomatoAmount;
document.getElementById("tomatoResult").innerHTML = tomatoResult;

///////////////////////////////////PEPPER//////////////////////////////

event.preventDefault();
var pepperPrice;
var pepperAmount;
var pepperResult;
pepperPrice = document.getElementById("pepperPrice").value;
pepperAmount= document.getElementById("pepperAmount").value;
pepperResult = tomatoPrice * tomatoAmount;
document.getElementById("pepperResult").innerHTML = tomatoResult;

///////////////////////////////////EGGPLANT//////////////////////////////


event.preventDefault();
var eggplantPrice;
var eggplantAmount;
var eggplantResult;
eggplantPrice = document.getElementById("eggplantPrice").value;
eggplantAmount= document.getElementById("eggplantAmount").value;
eggplantResult = eggplantPrice * eggplantAmount;
document.getElementById("eggplantResult").innerHTML = eggplantResult;

///////////////////////////////////////////////////////////////////////

var subtotal_veg;
subtotal_veg = tomatoResult + pepperResult + eggplantResult;
document.getElementById("subtotal_veg").innerHTML = subtotal_veg;

}