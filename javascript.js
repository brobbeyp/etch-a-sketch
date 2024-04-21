
const createDivs = (row) => {
    for (let x = 0; x < 16; x++) {
        let div = document.createElement('div');
        row.appendChild(div);
        div['id'] = `${row.id},${x+1}` ;
    }
};

const createGrid = (container) => {
    for (let y = 0; y < 16; y++) {
        let row = document.createElement('div');
        row['id'] = `${y+1}`;
        createDivs(row);
        container.appendChild(row) 
    }

}

const main = () => {
    const gridContainer = document.querySelector('#gridContainer');
    createGrid(gridContainer);
};

main()