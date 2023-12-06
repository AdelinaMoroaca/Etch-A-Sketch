const container = document.getElementById('container');
const drawTable = document.createElement('div');
let square = document.createElement('div');
let button = document.getElementById('pixel');

container.style.border = '2px solid red';
container.style.backgroundColor = 'purple';
container.style.width = '300px';
container.style.height = '300px';
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';


drawTable.style.display = 'flex';
drawTable.style.flexFlow = 'row wrap';
drawTable.style.backgroundColor = 'pink';
drawTable.style.border = '2px solid yellow';
drawTable.style.width = '256px';
drawTable.style.height = '256px';

container.appendChild(drawTable)

const gridTable = (num) => {
    for (i=0; i < num; i++) {
        for (j=0; j < num; j++) {
            let square = document.createElement('div');
            square.style.backgroundColor = 'red';
            square.style.height = `${256/num}px`;
            square.style.width = `${256/num}px`;
            drawTable.appendChild(square); 
            square.addEventListener('mouseenter', function(){
               square.style.backgroundColor = 'blue';
            })
        }
    }

}

gridTable(16)


button.addEventListener('click',function(){

    let newDimension = parseInt(prompt("enter the number of squares per side for your new grid"));

    if (newDimension <= 100) {
        drawTable.textContent= '';

        const gridTable = (newDimension) => {
            for (i=0; i < newDimension; i++) {
                for (j=0; j < newDimension; j++) {
                    let newSquare = document.createElement('div');
                    newSquare.style.backgroundColor = 'red';
                    newSquare.style.height = `${256/newDimension}px`;
                    newSquare.style.width = `${256/newDimension}px`;
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
