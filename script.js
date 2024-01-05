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
let colorPicker = document.getElementById('colorPicker');

container.style.border = '2px solid black';
container.style.backgroundColor = 'grey';
container.style.width = '405px';
container.style.height = '405px';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.boxShadow= '2px 2px 2px 5px #414141';

drawTable.style.display = 'flex';
drawTable.style.flexFlow = 'row wrap';
drawTable.style.backgroundColor = 'white';
drawTable.style.border = '1px solid black';
drawTable.style.width = '400px';
drawTable.style.height = '400px';
container.appendChild(drawTable)

let selectColor = 'black';
let drawColor = (e, color) => e.target.style.backgroundColor = color;

// let selectColor = 'black';

const gridTable = (num) => {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            let square = document.createElement('div');
            square.classList.add('drawSquare');
            square.style.height = `${400/num}px`;
            square.style.width = `${400/num}px`;
            drawTable.appendChild(square);

            //1 method:
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

    if (newDimension <= 100){
        drawTable.textContent = '';
        gridTable(newDimension)
    }
}
 
//CHANGE COLOR
function changeColor(){
    console.log('ok')
    selectColor = colorPicker.value;
    drawTable.addEventListener('mouseover', function(e){
        if(e.target.classList.contains('drawSquare')){
            drawColor(e, selectColor)
        }
    })
}

//RAINBOW COLOR
function randomRGBA() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function createRainbowColor(){
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
function clearTable(){
    window.location = window.location;
}

//ELEMENTS EVENTS
slide.addEventListener('click', changePixelNumber);
buttonColorType.addEventListener('click', changeColor);
buttonRainbow.addEventListener('click', createRainbowColor)
buttonErase.addEventListener('click', eraseDrawTable)
buttonClear.addEventListener('click', clearTable)
