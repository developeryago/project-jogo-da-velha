const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")

let posibles = []
let turn = 3

let gameArea = document.querySelectorAll(".campo")
const campo1 = document.getElementById("campo1")
const campo2 = document.getElementById("campo2")
const campo3 = document.getElementById("campo3")
const campo4 = document.getElementById("campo4")
const campo5 = document.getElementById("campo5")
const campo6 = document.getElementById("campo6")
const campo7 = document.getElementById("campo7")
const campo8 = document.getElementById("campo8")
const campo9 = document.getElementById("campo9")


document.getElementById("startBtn").addEventListener("click", startGame)

/*document.getElementById("campo1").addEventListener("click", selectedArea)
document.getElementById("campo2").addEventListener("click", selectedArea)
document.getElementById("campo3").addEventListener("click", selectedArea)
document.getElementById("campo4").addEventListener("click", selectedArea)
document.getElementById("campo5").addEventListener("click", selectedArea)
document.getElementById("campo6").addEventListener("click", selectedArea)
document.getElementById("campo7").addEventListener("click", selectedArea)
document.getElementById("campo8").addEventListener("click", selectedArea)
document.getElementById("campo9").addEventListener("click", selectedArea)

document.getElementById("campo1").addEventListener("click", startGame)
document.getElementById("campo2").addEventListener("click", startGame)
document.getElementById("campo3").addEventListener("click", startGame)
document.getElementById("campo4").addEventListener("click", startGame)
document.getElementById("campo5").addEventListener("click", startGame)
document.getElementById("campo6").addEventListener("click", startGame)
document.getElementById("campo7").addEventListener("click", startGame)
document.getElementById("campo8").addEventListener("click", startGame)
document.getElementById("campo9").addEventListener("click", startGame)*/



function startGame (){
    const turnTxt = document.querySelector("#turn")
    if (player1.value == null || player2.value == null){
        turnTxt.innerHTML = "Preencha o campo dos jogadores antes de iniciar"
    }
    if (turn % 2 === 1){
        turnTxt.innerHTML = "Turno de " + player1.value
        posibles = "X"
    } else{
        turnTxt.innerHTML = "Turno de " + player2.value
        posibles = "O"
    }
    gameArea.forEach( function (element){
        element.classList.remove("win")
        element.innerText = ""
        element.addEventListener("click", selectedArea)
        turn++
    })
}

function selectedArea(ev){
     let area = ev.currentTarget
     area.value = posibles
     desaleRegion(area)
     return turn ++
}
function desaleRegion(element){
    element.style.cursor = "default"
    element.removeEventListener("click",selectedArea)
}
function winner(){
    win = ""
    if(campo1.value || campo2.value || campo3.value === "X"){
        campo1; campo2; campo3.classList.add("win")
    }
}  