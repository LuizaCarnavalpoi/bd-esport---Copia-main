const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('resetButton');

let isCircleTurn = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = (currentPlayer) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
};

const handleClick = (event) => {
    const cell = event.target;
    const currentPlayer = isCircleTurn ? 'O' : 'X';

    if (cell.textContent !== '') return;

    cell.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
        statusDisplay.textContent = `${currentPlayer} venceu!`;
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        statusDisplay.textContent = 'Empate!';
    } else {
        isCircleTurn = !isCircleTurn;
        statusDisplay.textContent = isCircleTurn ? 'É a vez do O' : 'É a vez do X';
    }
};

const resetGame = () => {
    cells.forEach(cell => cell.textContent = '');
    isCircleTurn = false;
    statusDisplay.textContent = 'Jogue!';
    cells.forEach(cell => cell.addEventListener('click', handleClick));
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
