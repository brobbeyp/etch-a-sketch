
const createDivs = (row) => {
    for (let x = 0; x < 16; x++) {
        let div = document.createElement('div');
        row.appendChild(div);
        div['id'] = `${x+1},${row.id}` ; // the divs position in the grid (x,y)
        div.setAttribute('data-x',`${x+1}`);
        div.setAttribute('data-y',`${row.id}`);
        div.classList.add('gridSquare');
    }
};

const createGrid = (container) => {
    for (let y = 0; y < 16; y++) {
        let row = document.createElement('div');
        row['id'] = `${y+1}`;
        createDivs(row);
        row.classList.add('gridRow');
        container.appendChild(row); 
    }

}

const main = () => {
    const gridContainer = document.querySelector('#gridContainer');
    createGrid(gridContainer);
};

main()

// Select and add hover event listener to every gridSquare class

const squares = document.querySelectorAll('.gridSquare');

const changeColor = (e) => {
    e.target.style.backgroundColor = 'black';
}


squares.forEach(square => square.addEventListener('mouseover', changeColor))
