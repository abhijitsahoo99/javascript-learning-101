const billInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const noOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonDiv = document.getElementById('perPersonTotal')



// Get number of people from number of people div
let noOfPeople = Number(noOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let bill = Number(billInputDiv.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  let tipPercentage = Number(tipInputDiv.value)/100
  
  // get the total tip amount
  let tipAmount = bill * tipPercentage

  // calculate the total (tip amount + bill)
  let totalTipAmount = bill + tipAmount

  // calculate the per person total (total divided by number of people)
  let totalPerson = totalTipAmount / noOfPeople

  // update the perPersonTotal on DOM & show it to user
  perPersonDiv.innerText = `$${totalPerson.toFixed(2).toLocaleString('en-US')}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  noOfPeople += 1

  // update the DOM with the new number of people
  noOfPeopleDiv.innerText = noOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(noOfPeople <= 1){
    throw 'Hey ! You can have less than 1 person'
    return
  }
  
  // decrement the amount of people
  noOfPeople -= 1
  
  // update the DOM with the new number of people
  noOfPeopleDiv.innerText = noOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
