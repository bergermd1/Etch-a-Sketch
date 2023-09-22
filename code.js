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
    let height = getComputedStyle(gridContainer).height;
    height = +height.slice(0, height.length - 2);
    for (let i = 1; i <= n; i++) {
        let div = document.createElement(`div`);
        div.classList.add(`rowContainer${i}`);
        gridContainer.appendChild(div);
        let rowContainer = document.querySelector(`.rowContainer${i}`);
        for (let j = 0; j < n; j++) {
            let square = document.createElement(`div`);
            square.classList = `square`;
            square.style.height = `${Math.floor(height/n)}px`;
            square.style.width = `${Math.floor(height/n)}px`;
            rowContainer.appendChild(square);
            square.addEventListener(`mouseover`, () => {
                if ([...square.classList].includes(`rolledOver`)) {
                    let rolloverCount = +square.getAttribute(`data-count`)
                    let rgb = square.style.backgroundColor;
                    rgb = [...rgb.split(",")];
                    
                    let r = +rgb[0].substring(4, rgb[0].length);
                    let g = +rgb[1].substring(1, rgb[1].length);
                    let b = +rgb[2].substring(1, rgb[2].length - 1);
                    
                    r = r - (r/(10 - rolloverCount + 1));
                    g = g - (g/(10- rolloverCount + 1));
                    b = b - (b/(10 - rolloverCount + 1));
                    // console.log(r);
                    square.style.backgroundColor = `rgb(${r},${g},${b})`
                    console.log(square.style.backgroundColor);

                    square.setAttribute(`data-count`, +square.getAttribute(`data-count`) + 1);
                } else {
                    /////////////////////////////////////////////////////////////////
                    // let r = Math.floor(Math.random() * 256);
                    // let g = Math.floor(Math.random() * 256);
                    // let b = Math.floor(Math.random() * 256);
                    // square.style.backgroundColor = `rgb(${r},${g},${b})`;
                    /////////////////////////////////////////////////////////////////
                    square.style.backgroundColor = `rgb(30, 144, 255)`;
                    square.classList.add(`rolledOver`)
                    square.setAttribute(`data-count`, 1);
                }
                // console.log([...square.classList].includes(`rolledOver`));
                // console.log([...square.classList]);
            })
        }
    }
}