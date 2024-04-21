
const createDivs = (row, squaresPerSide) => {
    for (let x = 0; x < squaresPerSide; x++) {
        let div = document.createElement('div');
        row.appendChild(div);
        div['id'] = `${x+1},${row.id}` ; // the divs position in the grid (x,y)
        div.setAttribute('data-x',`${x+1}`);
        div.setAttribute('data-y',`${row.id}`);
        div.classList.add('gridSquare');
    }
};

const createGrid = (container, squaresPerSide) => {
    for (let y = 0; y < squaresPerSide; y++) {
        let row = document.createElement('div');
        row['id'] = `${y+1}`;
        createDivs(row, squaresPerSide);
        row.classList.add('gridRow');
        container.appendChild(row); 
    }

}

const randomRGB = () => {
    let r = Math.floor((Math.random() * 255))
    let g = Math.floor((Math.random() * 255))
    let b = Math.floor((Math.random() * 255))
    return `rgb(${r}, ${g}, ${b})`;
}

const changeColor = (e) => {
    e.target.style.backgroundColor = randomRGB();
    if (e.target.style.opacity <= .9) {
        e.target.style.opacity = +e.target.style.opacity + .1;
    }
    
};

const promptSquaresPerSide = () => {
    let squaresPerSide = Number.parseInt(prompt('Please enter a number of squares per side (between 2 and 100): ',
                                '16'));
    if (squaresPerSide < 2) {
        squaresPerSide = 16;
    } else if (squaresPerSide > 100) {
        squaresPerSide = 100
    }
    return (squaresPerSide);
    
};

const clearGrid = () => {
    gridContainer.innerHTML = ''
};

const drawGridFromPrompt = () => {
    const squaresPerSide = promptSquaresPerSide();
    clearGrid();
    createGrid(gridContainer,squaresPerSide);
    addSquareEventListeners();
}

const addSquareEventListeners = () => {
    let squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => square.addEventListener('mouseover', changeColor));
}

const addButtonEventListener = () => {
    let button = document.querySelector('#resetButton');
    button.addEventListener('click', drawGridFromPrompt);
}



const main = () => {
    // init gridContainer
    const gridContainer = document.querySelector('#gridContainer');
    createGrid(gridContainer, 16);
    addSquareEventListeners();
    addButtonEventListener();
};

main();







