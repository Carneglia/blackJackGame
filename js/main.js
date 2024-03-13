const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startEl = document.getElementById("start-el");
const messageEl = document.getElementById("message-el");
let newCardEl = document.getElementById("extra-el");
let hasBlackJack = false
let playerAlive = false;
let playerLost = true;
const player = "";
let cards = [];
let message = ""
let sum = ""

function getRandomCard() {
    let randomNumer = Math.floor(Math.random() * 11) + 1;
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function renderGame() {
    cardsEl.textContent = ""
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += "- " + cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        newCardEl.style.display = "block";
        playerAlive = true;

    } else if (sum === 21) {
        message = "YOU WIN !"
        hasBlackJack = true;
        startEl.style.display = "block";
        newCardEl.style.display = "none";
    } else {
        message = "Sorry, you lost !"
        playerAlive = false;
        startEl.style.display = "block"
        newCardEl.style.display = "none";
    }
    messageEl.textContent = message
}

function startGame() {
    playerAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    sumEl.textContent = sum
    renderGame()
    startEl.style.display = "none"
}
function extraCard() {
    if (playerAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cardsEl.textContent = cards
        sum += card
        cards.push(card)
        sumEl.textContent = sum
        renderGame()

    }
}
