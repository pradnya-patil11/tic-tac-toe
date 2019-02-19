/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    let newValue = 1;
    grid[colIdx][rowIdx] = newValue;
    renderMainGrid();
    addClickHandlers();
    winner();
    setTimeout(function() {
        computerMove();
    }, 300);
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        if(boxes[idx].textContent === "") {
            boxes[idx].addEventListener('click', onBoxClick, false);
        }
    }
}

function computerMove() {
    console.log('computermove');
    var emptycells = [],
    gridval = [],
    cordinate = [];
    for(let colIdx=0; colIdx < GRID_LENGTH ; colIdx++ ) {
        for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
            const value = grid[colIdx][rowIdx];
            if(value === 0) {
                rowid = rowIdx;
                colid = colIdx;
                gridval = [colid, rowid];
                emptycells = emptycells.concat([gridval]);
                console.log('emptycells', emptycells);
            }
        }
    }
    cordinate = emptycells[Math.floor(Math.random() * (emptycells.length))];
    newcolid = cordinate[0];
    newrowid = cordinate[1];
    let newValue = 2;
    grid[newcolid][newrowid] = newValue;
    renderMainGrid();
    addClickHandlers();
    winner();
}

function resetGame() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].textContent == "";
        if(boxes[idx].children[0]) {
            boxes[idx].children[0].remove();
        }
    }
    for(let colIdx=0; colIdx < GRID_LENGTH ; colIdx++ ) {
        for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
            grid[colIdx][rowIdx] = 0;
        }
    }

    document.getElementsByClassName("result")[0].innerHTML = '';
}

function resethandler() {
    document.getElementsByClassName("resetbtn")[0].addEventListener('click', resetGame, false);
}

function winner() {
    var boxes = document.getElementsByClassName("box"),
        winflag = 0,
        cross = '';
    if(boxes[0].textContent !== '' && boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[0].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[0].textContent !== '' && boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[6].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[0].textContent !== '' && boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[4].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[1].textContent !== '' && boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[1].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[2].textContent !== '' && boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[2].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[3].textContent !== '' && boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[3].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[6].textContent !== '' && boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[6].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }

    if(boxes[2].textContent !== '' && boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent) {
        winflag = 1;
        console.log('win');
        if(boxes[2].textContent === 'X'){
            cross = 'X';
        } else {
            cross = 'O'
        }
    }
    console.log(winflag, cross);
    if(winflag == 1 && cross == "X") {
        console.log('won');
        document.getElementsByClassName("result")[0].innerHTML = 'You Won!!!';
    } else if(cross == "O") {
        console.log('lost');
        document.getElementsByClassName("result")[0].innerHTML = 'You lost!!!';
    } else {
        document.getElementsByClassName("result")[0].innerHTML = '';
    }
    
}

initializeGrid();
renderMainGrid();
addClickHandlers();
resethandler();