console.log('Hello')
let title = document.getElementById('title')
console.log("before - ", title.innerText)
let message = "Goodbye My Lover !"
title.innerText = message;
console.log("after - ", title.innerText)
title.innerHTML = `<p>${message}</p>`
title.style.color = 'blue'
title.style.backgroundColor = 'pink'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log('You clicked the red box')
// yellowDiv.onclick = () => console.log('You clicked the yellow box')
// greenDiv.onclick = () => console.log('You clicked the green box')

const squares = document.querySelectorAll('.squareButton')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

const timesClicked = {'red' : 0 , 'yellow' : 0 , 'green' : 0}
squares.forEach(square => {
  square.onclick = () =>{
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value] 
  } 
    // console.log(square.value)
})
const clearScores = () => {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => square.innerText = '')
}

const clearGameDiv = document.getElementById('clear-game')
clearGameDiv.onclick = () => clearScores()
