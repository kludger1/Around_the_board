// select Elements and create variables
const die = document.querySelector('.die')
const roll = document.querySelector(".roll")
const img = document.querySelector('img')

const players = [
    { player: document.querySelector('.player1'), location: 0 },
    { player: document.querySelector('.player2'), location: 0 },
    { player: document.querySelector('.player3'), location: 0 },
    { player: document.querySelector('.player4'), location: 0 }
]

const numPlayers = players.length
let turn = 0
const maxRoll = 6
const maxSpots = getSpots().length - 1
// define function
function changeTurn() {
    turn = (turn >= numPlayers - 1) ? 0 : turn + 1
}
function movePlayer(num, spots) {
    players[turn].location += num
    players[turn].location = (players[turn].location > maxSpots)?  players[turn].location - maxSpots : players[turn].location
    spots[players[turn].location].appendChild(players[turn].player)
}
function rollDie(e) {
    roll.textContent = ``
    img.src = 'img/Dodecahedron3.gif'
    setTimeout(() => {
        const num = Math.ceil(Math.random() * maxRoll)
        roll.textContent = num
        movePlayer(num, getSpots())
        changeTurn()
    }, 1700)
}







// run function and/or add event listeners
die.addEventListener('click', rollDie) 