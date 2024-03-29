/* The code below is mostly stolen, with a few edits. I'm feeling 
pretty behind with a lot of this stuff so I wanted to focus on 
understanding (and being able to publish SOMETHING to Heroku...) */

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
    startButton.textContent = "Player X's turn"
    startButton.disabled = true;
});
let gameBoard = document.getElementById('board');
let playerTurn = 'X';
let column1 = document.getElementsByClassName('col-1');
let column2 = document.getElementsByClassName('col-2');
let column3 = document.getElementsByClassName('col-3');
let diag1 = document.getElementsByClassName('diag-1');
let diag2 = document.getElementsByClassName('diag-2');
let row1 = document.getElementsByClassName('row-1');
let row2 = document.getElementsByClassName('row-2');
let row3 = document.getElementsByClassName('row-3');
let boxes = document.getElementsByClassName('box');

function loopaX(x) {
    for (let content of x) {
        if (content.innerHTML !== 'X') {
            return false;
        }
    }
    return true;
}

function loopaO(o) {
    for (let content of o) {
        if (content.innerHTML !== 'O') {
            return false;
        }
    }
    return true;
}

function isBoardFull(game) {
    for (let content of game) {
        if (!content.innerHTML) {
            return false;
        }
    }
    return true
}

gameBoard.addEventListener('click', () => {
    let e = event.target;
    if (e.textContent === 'X' || e.textContent === 'O') {
        alert('Please choose an empty square');
        return false;
    }
    else if (playerTurn === 'X') {
        e.textContent = 'X'
        playerTurn = 'O';
        startButton.textContent = "Player O's turn"
    }
    else if (playerTurn === 'O') {
        e.textContent = 'O'
        playerTurn = 'X';
        startButton.textContent = "Player X's turn"
    }
});
gameBoard.addEventListener('mousemove', () => {
    if (loopaX(row1) || loopaO(row1)) {
        alert(`Player ${document.getElementById('cell-1').innerText} wins`);
        location.reload();
    }
    else if (loopaX(row2) || loopaO(row2)) {
        alert(`Player ${document.getElementById('cell-4').innerText} wins`);
        location.reload();
    }
    else if (loopaX(row3) || loopaO(row3)) {
        alert(`Player ${document.getElementById('cell-7').innerText} wins`);
        location.reload();
    }
    else if (loopaX(column1) || loopaO(column1)) {
        alert(`Player ${document.getElementById('cell-3').innerText} Wins`)
        location.reload();
    }
    else if (loopaX(column2) || loopaO(column2)) {
        alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
        location.reload();
    }
    else if (loopaX(column3) || loopaO(column3)) {
        alert(`Player ${document.getElementById('cell-5').innerText} Wins`)
        location.reload();
    }
    else if (loopaX(diag1) || loopaO(diag1)) {
        alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
        location.reload();
    }
    else if (loopaX(diag2) || loopaO(diag2)) {
        alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
        location.reload();
    }
    else if (isBoardFull(boxes)) {
        alert('It\'s a tie!');
        location.reload();
    }
});