function final() {
  var tax, cost;
  tax = 12;
  cost = document.getElementById('txtcost').value;
  document.getElementById('outputTotal').value = +(cost / 100 * tax) + +cost;
  //Finally finished this really annoying piece of code
  //I had to add a "+" to turn a string value into a number values
  //This was a 3 hour project
}
function final2() {
  var tax2, cost2;
  tax2 = 15;
  cost2 = document.getElementById('txtcost2').value;
  document.getElementById('outputTotal2').value = +(cost2 / 100 * tax2) + +cost2;
  //The second part of the VAT Calculator
}
