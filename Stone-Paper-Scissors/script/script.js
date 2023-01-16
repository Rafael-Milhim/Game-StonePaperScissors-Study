const choicePlayerImg = document.getElementById("player-1-img")
const choiceComputerImg = document.getElementById("player-2-img")
const resultDraw = document.getElementById("text-result")

const buttonSelect1 = document.getElementById("stone")
const buttonSelect2 = document.getElementById("paper")
const buttonSelect3 = document.getElementById("scissors")

let choicePlayer = null
let choiceComputer = null


function contentChange1(){
    choicePlayerImg.innerHTML = '<img src="img/stone.png" alt="Stone">'
    choicePlayer = "stone"
    computerChoice()
}

function contentChange2(){
    choicePlayerImg.innerHTML = '<img src="img/paper.png" alt="Paper">'
    choicePlayer = "paper"
    computerChoice()
}

function contentChange3(){
    choicePlayerImg.innerHTML = '<img src="img/scissors.png" alt="Scissors">'
    choicePlayer = "scissors"
    computerChoice()
}

buttonSelect1.addEventListener("click", contentChange1)
buttonSelect2.addEventListener("click", contentChange2)
buttonSelect3.addEventListener("click", contentChange3)

function computerChoice(){
    var randNumber = Math.floor(Math.random() * 4)

    if(randNumber === 0){
        choiceComputerImg.innerHTML = '<img src="img/stone.png" alt="Stone">'
        choiceComputer = "stone"
        checkingWhoWin()
    } else if (randNumber === 1){
        choiceComputerImg.innerHTML = '<img src="img/paper.png" alt="Paper">'
        choiceComputer = "paper"
        checkingWhoWin()
    } else {
        choiceComputerImg.innerHTML = '<img src="img/scissors.png" alt="Scissors">'
        choiceComputer = "scissors"
        checkingWhoWin()
    }
}

function checkingWhoWin(){
    if(choicePlayer === choiceComputer){
        resultDraw.innerHTML = "Draw"
    } else if (choicePlayer === "stone" & choiceComputer === "paper") {
        resultDraw.innerHTML = "You Lost"
    } else if (choicePlayer === "stone" & choiceComputer === "scissors") {
        resultDraw.innerHTML = "You Win!!"
    } else if (choicePlayer === "paper" & choiceComputer === "stone") {
        resultDraw.innerHTML = "You Win!!"
    } else if (choicePlayer === "paper" & choiceComputer === "scissors") {
        resultDraw.innerHTML = "You Lost"
    } else if (choicePlayer === "scissors" & choiceComputer === "stone") {
        resultDraw.innerHTML = "You Lost"
    } else if (choicePlayer === "scissors" & choiceComputer === "paper") {
        resultDraw.innerHTML = "You Win!!"
    }
    

}