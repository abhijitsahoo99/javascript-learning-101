const getComputerChoice = () => {
  let rpsChoice = ['Rock' , 'Paper' , 'Scissors']
  let computerChoice = rpsChoice[Math.floor(Math.random() * 3)]
  return computerChoice
}

const getResult = (playerChoice , computerChoice) => {
  let score;
  if(playerChoice === computerChoice){
    score = 0
  }
  else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
    score = 1
  }
  else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
    score = 1
  }
  else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
    score = 1
  }
  else{
    score = -1
  }
  return score
}
const showResult = (score , playerChoice , computerChoice) => {
  
  let playerscore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  
  playerscore.innerText = `${Number(playerscore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖
  ${computerChoice}`
   switch (score){
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a draw`
      break;
    case 1:
      result.innerText = `You Win`
      break;
  }
}  

const onClickRPS = (playerChoice) => {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value , computerChoice)
  showResult(score , playerChoice.value , computerChoice)
}

const playGame = () => {
  let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

const endGame = () => {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
