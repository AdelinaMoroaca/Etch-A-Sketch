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

container.appendChild(drawTable)

const gridTable = (num) => {
    for (i=0; i < num; i++) {
        for (j=0; j < num; j++) {
            let square = document.createElement('div');
            square.style.backgroundColor = 'red';
            square.style.height = `${300/num}px`;
            square.style.width = `${300/num}px`;
            drawTable.appendChild(square); 
            square.addEventListener('mouseenter', function(){
               square.style.backgroundColor = 'blue';
            //    square.style.backgroundColor = 'yellow';

            })
        }
    }

}

gridTable(16)

outputPixel.textContent = slide.value;

slide.addEventListener('click', function(){

    let newDimension = parseInt(slide.value);
    outputPixel.textContent = this.value;

    if (newDimension <= 100) {
        drawTable.textContent= '';

        const gridTable = (newDimension) => {
            for (i=0; i < newDimension; i++) {
                for (j=0; j < newDimension; j++) {
                    let newSquare = document.createElement('div');
                    newSquare.style.backgroundColor = 'red';
                    newSquare.style.height = `${300/newDimension}px`;
                    newSquare.style.width = `${300/newDimension}px`;
                    drawTable.appendChild(newSquare); 
    
                    newSquare.addEventListener('mouseenter', function(){
                        newSquare.style.backgroundColor = 'blue';
                        // newSquare.addEventListener('mouseover', function(){
                        //     newSquare.style.backgroundColor = 'blue';
                        // });
                    })
      
                }
            }
        } 
        gridTable(newDimension)
    } else {
        console.log("NOK")
    }

})

//------------------------------------

buttonColorType.addEventListener('click', function(){

    console.log("buttonColorType")
    let newDimension = parseInt(slide.value);
    outputPixel.textContent = this.value;

    if (newDimension <= 100) {
        drawTable.textContent= '';

        const gridTable = (newDimension) => {
            for (i=0; i < newDimension; i++) {
                for (j=0; j < newDimension; j++) {
                    let newSquare = document.createElement('div');
                    newSquare.style.backgroundColor = 'red';
                    newSquare.style.height = `${300/newDimension}px`;
                    newSquare.style.width = `${300/newDimension}px`;
                    drawTable.appendChild(newSquare); 
                    newSquare.addEventListener('mouseenter', function(){
                        newSquare.style.backgroundColor = 'blue';
                    })
                }
            }
        } 
        gridTable(newDimension)
    } else {
        console.log("NOK")
    }
})

buttonRainbow.addEventListener('click', function(){
    // window.location=window.location;
    let newDimensionR = parseInt(buttonRainbow.value);
    outputPixel.textContent = this.value;

    if (newDimensionR <= 100) {
        drawTable.textContent= '';
        console.log("0.2 ~ buttonErase")

        const gridTable = (newDimensionR) => {
            for (i=0; i < newDimensionR; i++) {
                for (j=0; j < newDimensionR; j++) {
                    let newSquare = document.createElement('div');
                    newSquare.style.backgroundColor = 'red';
                    newSquare.style.height = `${300/newDimensionR}px`;
                    newSquare.style.width = `${300/newDimensionR}px`;
                    drawTable.appendChild(newSquare); 
                    newSquare.addEventListener('mouseenter', function(){
                        // newSquare.style.backgroundColor = 'blue';
                        // newSquare.style.backgroundColor = 'yellow';
                        newSquare.style.backgroundColor = 'pink';

                    })
                }
            }
        } 
        gridTable(newDimensionR)
    } else {
        console.log("NOK")
    }
})

buttonErase.addEventListener('click', function(){
    // console.log("buttonErase")
    // console.log("0 ~ buttonErase")
    // console.log("0.1 ~ buttonErase")
    // console.log("0.2 ~ buttonErase")
    let newDimensionErase = parseInt(buttonErase.value);
    console.log("buttonErase",newDimensionErase);
    outputPixel.textContent = this.value;
    console.log("0.1 ~ buttonErase");

    // if (newDimension <= 100) {
    //     drawTable.textContent= outputPixel.textContent;
    //     console.log("0.2 ~ buttonErase")
    newSquare.addEventListener('mouseenter', function(){
        newSquare.style.backgroundColor = 'red';
        // newSquare.addEventListener('mouseover', function(){
        //     newSquare.style.backgroundColor = 'blue';
        // });
    })
        const gridTable = (newDimensionErase) => {
            for (i=0; i < newDimensionErase; i++) {
                for (j=0; j < newDimensionErase; j++) {
                    console.log("0 ~ buttonErase")

                    let newSquare = document.createElement('div');
                    newSquare.style.backgroundColor = 'red';
                    newSquare.style.height = `${300/newDimension}px`;
                    newSquare.style.width = `${300/newDimension}px`;
                    drawTable.appendChild(newSquare); 
                    newSquare.addEventListener('mouseenter', function(){
                        newSquare.style.backgroundColor = 'red';
                    })
                }
            }
        } 
        gridTable(newDimensionErase)
    // } else {
    //     console.log("NOK")
    // }
})

buttonClear.addEventListener('click', function(){
    window.location=window.location;
})