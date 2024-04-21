
const createDivs = () => {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div['id'] = `square-${i+1}`;
        gridContainer.appendChild(div);
    }
};

const main = () => {
    const gridContainer = document.querySelector('#gridContainer');
    createDivs();
};

main()