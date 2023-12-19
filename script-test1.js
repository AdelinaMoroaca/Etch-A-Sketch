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
let newColor = 'black';

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

// square.style.backgroundColor='red';

container.appendChild(drawTable)

const gridTable = (num) => {
    for (i=0; i < num; i++) {
        for (j=0; j < num; j++) {
            let square = document.createElement('div');
            // let color = document.getElementById('colorPicker').value;

            // square.style.backgroundColor = color;
            square.style.height = `${300/num}px`;
            square.style.width = `${300/num}px`;
            drawTable.appendChild(square); 

            drawTable.addEventListener('mousedown', function(){
                square.addEventListener('mouseenter', function(){
                    square.style.backgroundColor = newColor; 
                    // square.style.backgroundColor = getRandomColorQ(); 

                    // console.log(getRandomColorDemo());
                })
                ,
                square.style.pointerEvents= 'auto';
                
            });
            drawTable.addEventListener('mouseup', function(){
                 square.style.pointerEvents= 'none'; 
            })
        }
    }
}

gridTable(16)

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
//------------------------------------
function changeColor(){
    newColor = colorPicker.value;
    square.style.backgroundColor = newColor;
} 

function getRandomColorDemo(){
	let randomNumber = Math.floor(Math.random() * 99999);
    // console.log('randomColor',randomNumber);
	let randomColorDemo = '#' + randomNumber;
    console.log('randomColor',randomColorDemo);

    return randomColorDemo;
}

var randomMulticolor = getRandomColorDemo();

// function getRandomColorQ() {
//     let lettersQ = '0123456789ABCDEF';
//     let colorQ = '#';
//     for (let i = 0; i < 6; i++) {
//       colorQ += lettersQ[Math.floor(Math.random() * 16)];
//     }
//     return colorQ;
// }



function multicolor(){
    console.log('1',newColor);

    // console.log(getRandomColorDemo().valueOf);

    // newColor = 'BLUE';
    newColor = randomMulticolor;
    console.log('2',newColor);
    square.style.backgroundColor = newColor;
    console.log('3',getRandomColorQ());

}


function eraseDrawTable(){
    newColor = drawTable.style.backgroundColor;
    square.style.backgroundColor = newColor;
}

function clear(){
    window.location=window.location;
}


slide.addEventListener('click', changePixelNumber)
buttonColorType.addEventListener('click', changeColor)

buttonRainbow.addEventListener('click', multicolor)
buttonErase.addEventListener('click', eraseDrawTable)
buttonClear.addEventListener('click', clear)
