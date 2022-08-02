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

///////////////CHEEESE////////////////////////////////////////////

event.preventDefault();
var cheesePrice;
var cheeseAmount;
var cheeseResult;
cheesePrice = document.getElementById("cheesePrice").value;
cheeseAmount= document.getElementById("cheeseAmount").value;
cheeseResult = cheesePrice * cheeseAmount;
document.getElementById("cheeseResult").innerHTML = cheeseResult;


///////////////BUTTER////////////////////////////////////////////

event.preventDefault();
var butterPrice;
var butterAmount;
var butterResult;
butterPrice = document.getElementById("butterPrice").value;
butterAmount= document.getElementById("butterAmount").value;
butterResult = butterPrice * butterAmount;
document.getElementById("butterResult").innerHTML = butterResult;
///////////////MILK - BOX////////////////////////////////////////////

event.preventDefault();
var milk_boxPrice;
var milk_boxAmount;
var milk_boxResult;
milk_boxPrice = document.getElementById("milk_boxPrice").value;
milk_boxAmount= document.getElementById("milk_boxAmount").value;
milk_boxResult = milk_boxPrice * milk_boxAmount;
document.getElementById("milk_boxResult").innerHTML = milk_boxResult;

///////////////SUB-TOTAL////////////////////////////////////////////////////////

var subtotal;
subtotal = cheeseResult + butterResult + milk_boxResult;
document.getElementById("subtotal").innerHTML = subtotal;

//////////////////PLUS TWO SIDES//////////////////////////////

var sum_sub_total;
sum_sub_total = subtotal_veg + subtotal;
document.getElementById("sum_sub_total").innerHTML = sum_sub_total;
}