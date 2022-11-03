console.log('Connected!')

/*----- constants -----*/
//no constants in this game 

/*----- app's state (variables) -----*/
let user = {
    roll: null,
    wins: 0
}

let comp = {
    roll: null,
    wins: 0
}

/*----- cached element references -----*/
const rollBtnEl = document.querySelector('button')
const userResultEl = document.querySelector('#user>h2')
const compResultEl = document.querySelector('#comp>h2')
const userWinsEl = document.getElementById('user-wins')
const compWinsEl = document.getElementById('comp-wins')

/*----- event listeners -----*/
rollBtnEl.addEventListener('click', handleRoll)

/*----- functions -----*/
function handleRoll(){
    userResultEl.classList.remove('winner')
    compResultEl.classList.remove('winner')
    console.log(`Rolling the dice...`)
    user.roll = rollDice()
    comp.roll = rollDice()
    compareRoll()
    render()
}

function rollDice(){
    return Math.floor(Math.random() * 6 + 1)
}

function compareRoll(){
    if (user.roll>comp.roll) {
        console.log('User Wins!')
        user.wins++
        userResultEl.classList.add('winner')
    } else if (comp.roll> user.roll){
        console.log('Computer Wins!')
        comp.wins++
        compResultEl.classList.add('winner')
    } else {
        console.log('Its a tie!')
    }
}


//render function will update our DOM Elements
function render() {
    userResultEl.textContent = user.roll
    compResultEl.textContent = comp.roll
    userWinsEl.textContent = `Wins: ${user.wins}`
    compWinsEl.textContent = `Wins: ${comp.wins}`
}

