let quantity_pen = 3;
let quantity_notebook =  2;

let price_pen = 2;
let price_notebook = 5;

let total_pen = quantity_pen * price_pen;
let total_notebook = quantity_notebook * price_notebook;
let total = total_notebook + total_pen;

console.log("totale: " + total +" euro");

let money = Number(prompt(" Quanti soldi hai?"))
let rest = money - total;
console.log("resto: " + rest + " euro");
if (rest < 0) {
alert("solde unsuffisant" )
alert("the rest to pay " + -rest + " euro") 

}
else  {
alert("ur rest is " + rest + " euro")
alert("thank  you for shopping with us ")

}