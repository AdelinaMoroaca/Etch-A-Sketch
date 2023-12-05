const container = document.getElementById('container');

function createGrid(num){
    container.style.border = '2px solid red';
    container.style.width = '160px';
    container.style.height = '160px';

    container.style.display = 'flex';
    container.style.flexFlow = 'row wrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    for (i=0; i < num; i++){
    let verticalSquare = document.createElement('div');
    verticalSquare.style.margin = '0';
    verticalSquare.style.backgroundColor = 'pink';
    verticalSquare.style.height = '10px';
    verticalSquare.style.width = '10px';
    container.appendChild(verticalSquare); 
    }
}

createGrid(256)


