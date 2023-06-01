let gameArea = document.querySelectorAll("#tralha span")
const root = document.querySelector(":root")
const main = document.querySelector("main")
let turn = ""
let vBoard = []

document.getElementById("startBtn").addEventListener("click", startGame)
document.getElementById("switchTheme").addEventListener("click", switchTheme)

function updateTitle() {
    const playerInput = document.getElementById(turn)
    document.getElementById('turn').innerHTML = "Turno de: " + playerInput.value
  }

function startGame (){
    vBoard = [["", "", ""], ["", "", ""], ["", "", ""]]
    turn = "player1"
    
    updateTitle()
    gameArea.forEach( function (element){
        element.classList.remove("win")
        element.innerText = ""
        element.classList.add('cursor-pointer')
        element.addEventListener("click", selectedArea)
    })
}

function selectedArea(ev){
     const span = ev.currentTarget
     let area = span.dataset.value
     const rowColumnPair = area.split(".") 
     const row = rowColumnPair[0]
     const column = rowColumnPair[1]
     if (turn === "player1"){
        span.innerText = "X"
        vBoard[row][column] = "X"
     } else{
        span.innerText = "O"
        vBoard[row][column] = "O"
     }
     console.clear()
     console.table(vBoard)
     desaleRegion(span)
     const winRegions = getWinRegions()
     if (winRegions.length > 0){
        win(winRegions)
     }else if (vBoard.flat().includes('')) {
        turn = turn === 'player1' ? 'player2' : 'player1'
        updateTitle()
    } else {
        document.querySelector('#turn').innerHTML = 'Empate! :('
      }
}

function desaleRegion(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener("click",selectedArea)
}

function getWinRegions(){
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function win(regions){
    regions.forEach( function(region){
        document.querySelector('[data-value="' + region + '"]').classList.add("win")
    })
    const playerName = document.getElementById(turn).value
    document.querySelector("#turn").innerHTML = playerName + " venceu! :)"
    document.querySelector("#startBtn").innerText = "Reiniciar"
}

function switchTheme(){
    if (main.dataset.theme === "dark"){
        root.style.setProperty("--cor-escura", "#dfe4da")
        root.style.setProperty("--cor-clara", "#212529")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--cor-clara", "#dfe4da")
        root.style.setProperty("--cor-escura", "#212529")
        main.dataset.theme = "dark"
    }
}