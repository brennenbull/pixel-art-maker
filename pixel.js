var body = document.getElementsByTagName('body')[0];
var pixelColor = null;
//Paint---------->>>>>>>
var mainWindow = document.getElementsByClassName('mainWindow')[0];
mainWindow.addEventListener('click', changeColor);

function changeColor() {
  pixel = event.target;
  pixel.style.backgroundColor = color;
}

var colors = document.getElementsByClassName('colors')[0];
colors.addEventListener('click', storeColor);

function storeColor() {
  targets = event.target;
  let colorStyle = window.getComputedStyle(targets);
  pixelColor = colorStyle.backgroundColor;
}

//Makes The Board----------->>>>
function makePixel(){
  var pixels = document.createElement('div');
  pixels.className = 'pixel';
  return pixels;
}

function addPixel (){
  for (var i = 0; i < 2500; i++){
    var pixel = makePixel();
    mainWindow.appendChild(pixel);
  }
}

addPixel();
