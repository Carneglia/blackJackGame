const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startEl = document.getElementById("start-el");
const messageEl = document.getElementById("message-el");
let newCardEl = document.getElementById("extra-el");
let titleEl = document.getElementById("title-el");
let hasBlackJack = false
let playerAlive = false;
let playerLost = true;
const player = "";
let cards = [];
let message = ""
let sum = ""

function messageChange() {
    if (playerAlive == false) {
        messageEl.textContent = "Let´s try again!";
    }
}
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
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        titleEl.textContent = "Two cards for you...";
        message = "Do you want to draw a new card?";
        newCardEl.style.display = "block";
        playerAlive = true;
        setTimeout(extraCard, 10000)

    } else if (sum === 21) {
        message = "YOU WIN !"
        hasBlackJack = true;
        startEl.style.display = "block";
        newCardEl.style.display = "none";
    } else {
        titleEl.textContent = "...";
        message = "Sorry, you lost !"
        playerAlive = false;
        setTimeout(messageChange, 3000);
        startEl.style.display = "block";
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
    sumEl.textContent = "Sum: " + sum
    renderGame()
    startEl.style.display = "none"
}
function extraCard() {
    if (playerAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cardsEl.textContent = cards
        sum += card
        cards.push(card)
        sumEl.textContent = "Sum: " + sum
        renderGame()
        titleEl.textContent = "One more...";

    }
}
