const electron = require('electron');
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on("ready", function() {
  mainWindow = new BrowserWindow({width: 1280, height:720});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  }));
});

function setVariables() {
  document.getElementById('outputTotal').value = 0;
  document.getElementById('taxTotal').value = 0;
  document.getElementById('outputTotal2').value =0;
  document.getElementById('taxTotal2').value = 0;
  document.getElementById('txtcost').value = 0;
  document.getElementById('txtcost2').value = 0;
  //This will make everything into number/intiger values
}

function final() {
  var tax, cost;
  tax = 12;
  cost = document.getElementById('txtcost').value;

  document.getElementById('outputTotal').value = (cost / 100 * tax) + +cost;
  document.getElementById('taxTotal').value = cost / 100 * tax;
  //Finally finished this really annoying piece of code
  //Improver variables!
  //I had to add a "+" to turn a string value into a number values
  //This was a 3 hour project
}
function final2() {
  var tax2, cost2;
  tax2 = 15;
  cost2 = document.getElementById('txtcost2').value;

  document.getElementById('outputTotal2').value = (cost2 / 100 * tax2) + +cost2;
  document.getElementById('taxTotal2').value = cost2 / 100 * tax2;
  //The second part of the Tax Calculator
}
