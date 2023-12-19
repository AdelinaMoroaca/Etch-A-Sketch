const container = document.getElementById('container');
const drawTable = document.createElement('div');
let square = document.createElement('div');
let button = document.getElementById('pixel');
let slide = document.getElementById('range');
let outputPixel = document.getElementById('pixelNumber');

let buttonColorType = document.getElementById('colorType');
let buttonRainbow = document.getElementById('rainbowType');
let buttonErase = document.getElementById('erase');
let buttonClear = document.getElementById('clear');
let colorPicker =document.getElementById('colorPicker');

container.style.border = '2px solid red';
container.style.backgroundColor = 'purple';
container.style.width = '400px';
container.style.height = '400px';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';


drawTable.style.display = 'flex';
drawTable.style.flexFlow = 'row wrap';
drawTable.style.backgroundColor = 'pink';
drawTable.style.border = '2px solid yellow';
drawTable.style.width = '300px';
drawTable.style.height = '300px';

let selectColor = 'black';
//e - event
//e.target = square
let drawColor = (e, color) => e.target.style.backgroundColor = color;

container.appendChild(drawTable)

const gridTable = (num) => {
    for (i=0; i < num; i++) {
        for (j=0; j < num; j++) {
            let square = document.createElement('div');
            //add class to square element
            square.classList.add('drawSquare');

            square.style.height = `${300/num}px`;
            square.style.width = `${300/num}px`;
            drawTable.appendChild(square); 

            //call drawColor with event.target and color params
            square.addEventListener('mouseover', function (e){
                drawColor(e, selectColor);
            })
        }
    }
}

gridTable(16)

//CHANGE PIXEL NUMBER

outputPixel.textContent = slide.value;

function changePixelNumber(){
    let newDimension = parseInt(slide.value);
    outputPixel.textContent = this.value;

    if (newDimension <= 100) {
        drawTable.textContent= '';
        gridTable(newDimension)
    } else {
        console.log("NOK")
    }

}

//CHANGE COLOR

function changeColor(){
    selectColor = colorPicker.value;
    //call drawColor with event.target and color params
    drawTable.addEventListener('mouseover', function(e){
        if(e.target.classList.contains('drawSquare')){
            drawColor(e, selectColor)
        }
    })
} 

//RAINBOW COLOR

//create randomRGBA color function
function randomRGBA() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



function multicolor(){
    drawTable.addEventListener('mouseover', function(e){
        //call drawColor with event.target and color params only to square elements
        if(e.target.classList.contains('drawSquare')){
            drawColor(e, randomRGBA())
        }
    })
    

}

//ERASE COLOR

function eraseDrawTable(){
    selectColor = drawTable.style.backgroundColor;
    drawTable.addEventListener('mouseover', function(e){
        //call drawColor with event.target and color params only to square elements
        if(e.target.classList.contains('drawSquare')){
            drawColor(e, selectColor)
        }
    })
}

//CLEAR COLOR

function clear(){
    window.location=window.location;
}

//ELEMENTS EVENTS

slide.addEventListener('click', changePixelNumber)
buttonColorType.addEventListener('click', changeColor)

buttonRainbow.addEventListener('click', multicolor)
buttonErase.addEventListener('click', eraseDrawTable)
buttonClear.addEventListener('click', clear)
