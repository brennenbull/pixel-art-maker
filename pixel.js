var body = document.getElementsByTagName('body')[0];
var pixelColor = 'black';
var currentColor =  document.getElementsByClassName('currentColor')[0];

//Paint---------->>>>>>>
var mainWindow = document.getElementsByClassName('mainWindow')[0];
mainWindow.addEventListener('click', changeColor);

function changeColor() {
  pixel = event.target;
  if(pixel.className === 'pixel'){
    pixel.style.backgroundColor = pixelColor;
  };
}

//Changing Brush Colors--------->>>>
var colors = document.getElementsByClassName('colors')[0];
colors.addEventListener('click', storeColor);

function storeColor() {
  targets = event.target;
  let colorStyle = window.getComputedStyle(targets);
  pixelColor = colorStyle.backgroundColor;
  currentColor.style.backgroundColor = pixelColor;
}
//CustomColor--------------->>>>
var colorSelector = document.getElementsByTagName('input')[0];
var colorSelectorColor = colorSelector.value;
colorSelector.style.backgroundColor = colorSelectorColor;
colorSelector.addEventListener('input', changeColor);
colorSelector.addEventListener('change', function (element){
  pixelColor = event.target.value;
  var colorSelectorValue = event.target.value;
  currentColor.style.backgroundColor = colorSelectorValue;
  colorSelector.style.backgroundColor = colorSelectorValue;
});

//The Brush Function-------->>>>
var down = false;

function isDown() {
  down = true;
}

function ifDown(){
  var target = event.target;
  if(down && target.className === 'pixel'){
    target.style.backgroundColor = pixelColor;
  }
}

function isUp() {
  down = false;
}
mainWindow.addEventListener('mousedown', isDown);
mainWindow.addEventListener('mouseover', ifDown);
body.addEventListener('mouseup', isUp);


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
