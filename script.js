const container = document.getElementById('container');
//let drawTable = document.createElement('div');
let square = document.createElement('div');

const gridTable = (num) => {
    container.style.border = '2px solid red';
    container.style.width = '160px';
    container.style.height = '160px';
    container.style.display = 'flex';
    container.style.flexFlow = 'row wrap';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    for (i=0; i < num; i++) {
        for (j=0; j < num; j++) {
            let square = document.createElement('div');
            square.style.margin = '0';
            square.style.backgroundColor = 'pink';
            square.style.height = '10px';
            square.style.width = '10px';
            container.appendChild(square); 
            square.addEventListener('mouseenter', function(){
               square.style.backgroundColor = 'blue';
            })
        }
    }
}

gridTable(16)

