window.onload = () => {
    // let gridContainer = document.querySelector(`.grid-container`);
    // console.log(gridContainer);
    makeGrid(16);
    document.querySelector(`button`).addEventListener(`click`, () => {
        let n = prompt(`Enter side length of new grid...`);
        makeGrid(n);
    })
}

function makeGrid(n) {
    let gridContainer = document.querySelector(`.grid-container`);
    gridContainer.textContent = ``;
    for (let i = 1; i <= n; i++) {
        let div = document.createElement(`div`);
        div.classList.add(`rowContainer${i}`);
        gridContainer.appendChild(div);
        let rowContainer = document.querySelector(`.rowContainer${i}`);
        for (let j = 0; j < n; j++) {
            let square = document.createElement(`div`);
            square.classList = `square`;
            square.style.height = `${Math.floor(1000/n)}px`;
            square.style.width = `${Math.floor(1000/n)}px`;
            rowContainer.appendChild(square);
            square.addEventListener(`mouseover`, () => {
                square.style.backgroundColor = `dodgerblue`;
            })
        }
    }

}