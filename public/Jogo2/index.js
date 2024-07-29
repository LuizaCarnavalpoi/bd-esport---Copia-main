const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const board = document.getElementById('game-board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('resetButton');

let cards = [...cardValues, ...cardValues];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const createCard = (value) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;

    const cardText = document.createElement('span');
    cardText.classList.add('card-text');
    cardText.textContent = value;

    card.appendChild(cardText);
    card.addEventListener('click', flipCard);

    return card;
};

const initializeBoard = () => {
    shuffleArray(cards);

    cards.forEach(value => {
        const card = createCard(value);
        board.appendChild(card);
    });
};

const flipCard = (event) => {
    if (lockBoard) return;

    const clickedCard = event.target.closest('.card');
    if (clickedCard === firstCard || clickedCard.classList.contains('matched')) return;

    clickedCard.classList.add('flipped');
    clickedCard.querySelector('.card-text').style.display = 'block';

    if (!firstCard) {
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    checkForMatch();
};

const checkForMatch = () => {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        disableCards();
    } else {
        unflipCards();
    }
};

const disableCards = () => {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    matchedPairs += 1;
    if (matchedPairs === cardValues.length) {
        statusDisplay.textContent = 'Você ganhou!';
    }

    resetBoard();
};

const unflipCards = () => {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.querySelector('.card-text').style.display = 'none';
        secondCard.querySelector('.card-text').style.display = 'none';

        resetBoard();
    }, 1000);
};

const resetBoard = () => {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
};

const resetGame = () => {
    board.innerHTML = '';
    cards = [...cardValues, ...cardValues];
    matchedPairs = 0;
    initializeBoard();
    statusDisplay.textContent = 'Jogue!';
};

resetButton.addEventListener('click', resetGame);

initializeBoard();
