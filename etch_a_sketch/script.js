const totalPixels = 960
const container = document.querySelector('.container');
const clear = document.querySelector('.clear');
const draw = document.querySelector('.pen');
const slider = document.querySelector('#size')
const label = document.querySelector('label')

let size = 12

function createGrid(size){
    //create grid by size x size with eventListener
    let pixelSize = totalPixels / size;
    console.log(pixelSize)

    for(let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        for (let j = 0; j < size; j++){
            const row = document.createElement('div');
            row.setAttribute('class', 'pixel');
            row.setAttribute("style", `width:${pixelSize}px; height:${pixelSize}px;`);
            row.style.background = "white";
            draw.addEventListener('click', () => row.addEventListener('mouseenter', () => row.style.background = 'black'))
            clear.addEventListener('click', () => row.style.background = 'white');

            // row.addEventListener('mouseenter', () => row.setAttribute("style", "background: black;")) dont work, i dont why

            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

function deleteGrid(container){
    while(container.firstChild){
        container.removeChild(container.firstChild) 
    }
}
// change size of grid
slider.addEventListener('click', () => {
    deleteGrid(container)   
    
    label.textContent=`Size ${slider.value} x ${slider.value}`;
    createGrid(slider.value)
})
//label continuos changing
slider.addEventListener('input', () => label.textContent=`Size ${slider.value} x ${slider.value}`)

createGrid(size)
