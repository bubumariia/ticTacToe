const cellElements = document.querySelectorAll(".cell")
const gameStatsEl = document.getElementById("game-status")
const restartBtnEl = document.getElementById("restart-btn")
let currentPlayer = "X" 
let gameState = ["","","","","","","","","",""] 
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const restartGame = ()=>{
  arrO = []
  arrX = []
  currentPlayer = "X" 
  gameState = ["","","","","","","","","",""]
  cellElements.forEach(cell=>{
    cell.innerText=""
    cell.style.pointerEvents = 'auto'
    
  })
  
  gameStatsEl.innerText = `It's ${currentPlayer}'s Turn`
}

restartBtnEl.addEventListener("click", restartGame)

const handleClick = (event, index) =>{
  if(gameState[index]!=="") return; 
  
  gameState[index] = currentPlayer;
  const cellEl = event.currentTarget;
  cellEl.innerText = currentPlayer;
  currentPlayer = currentPlayer==="X"?"O":"X"
  gameStatsEl.innerText = `It's ${currentPlayer}'s Turn`
  checkResult()
}


cellElements.forEach((cell,index)=>{
  cell.addEventListener("click", e=>handleClick(e, index))
})




let arrX = []
let arrO = []
 const checkResult = ()=>{
     for(let i in gameState){
       if(gameState[i] == "X"){
           gameState[i] = gameState.indexOf(gameState[i])
           arrX.push(gameState[i])
        }else if(gameState[i] == "O"){
            gameState[i] = gameState.indexOf(gameState[i])
            arrO.push(gameState[i])
        }
     }
     searching()
    }
    
function searching(){
    for(let i=0; i<winningCombination.length; i++){
        if(arrX.includes(winningCombination[i][0]) && arrX.includes(winningCombination[i][1]) && arrX.includes(winningCombination[i][2]) ){
            gameStatsEl.innerHTML = 'x is the winner'
           disableCells()

        }else if(arrO.includes(winningCombination[i][0]) && arrO.includes(winningCombination[i][1]) && arrO.includes(winningCombination[i][2])){
            gameStatsEl.innerHTML = 'O is the winner'
           disableCells()
        }
    } 
}
function disableCells(){
    for(let i = 0; i < cellElements.length; i++){
       cellElements[i].style.pointerEvents = 'none'
    }
}



// function checkResult(){
//  checkingX()
//  checkingO()
// }

// function checkingX(){
//   if(gameState[4]=="X" && gameState[0]== "X" && gameState[8]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[4]=="X" && gameState[1]== "X" && gameState[7]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[4]=="X" && gameState[2]== "X" && gameState[6]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[4]=="X" && gameState[3]== "X" && gameState[5]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[1]=="X" && gameState[0]== "X" && gameState[2]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[3]=="X" && gameState[0]== "X" && gameState[6]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[5]=="X" && gameState[2]== "X" && gameState[8]) gameStatsEl.innerText = "X is a winner"
//   if(gameState[7]=="X" && gameState[6]== "X" && gameState[8]) gameStatsEl.innerText = "X is a winner"
// }
// function checkingO(){
//   if(gameState[4]=="O" && gameState[0]== "O" && gameState[8] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[4]=="O" && gameState[1]== "O" && gameState[7] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[4]=="O" && gameState[2]== "O" && gameState[6] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[4]=="O" && gameState[3]== "O" && gameState[5] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[1]=="O" && gameState[0]== "O" && gameState[2] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[3]=="O" && gameState[0]== "O" && gameState[6] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[5]=="O" && gameState[2]== "O" && gameState[8] == "O") gameStatsEl.innerText = "0 is a winner"
//   if(gameState[7]=="O" && gameState[6]== "O" && gameState[8] == "O") gameStatsEl.innerText = "0 is a winner"
// }





    