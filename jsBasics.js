// Javascript 101 (Basics) 

// Comments 

// console.log() - These are comments that won't be executed by the compiler  
//console.log('Hello World');

// Variables(var,let,const)
// Var is outdated, always use let, use const if the value of the variable will never change again in the code.
// name = "Abhijit Sahoo";
// console.log(name);
// If you have variable like this name = "Abhijit Sahoo" , console.log(name) means the same as console.log('Abhijit Sahoo');

// Operators 
/*
bill = 20
tipPercent = 0.2
tipAmount = bill*tipPercent
console.log(tipAmount)
*/

// Your First JS App 
// Prompt and Alert - In real world we won't be using prompt and alert but html forms to take user inputs  
// User Inputs and not hard coded values 

/*
bill = Number(prompt("What's the bill of the food?"))
tipPercent = prompt("What's the tip percent?")/100
tipAmount = Number(bill*tipPercent)
console.log("Tip Amount :", tipAmount)
//alert(tipAmount)
total = bill + tipAmount;
console.log('Total Bill :', total)
*/

//Number because by default the values from the user are stored in the form of string.  
// data type, typecasting

/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks,withdra amount if 0 balance)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1, if more than one then multiplay the number with. Suppose 0->3 then multiply the number with 3.
*/

// Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'Wear your sunglasses 😎'
// let weather = prompt('How is the weather?')

/*
let weather = prompt("How's the weather today?")
//Logical Operators
if(weather == 'rain' || weather == "Rain"){
  console.log("Grab an umbrella ☔")
}
else{
  console.log("Wear your glasses 😎")
}
*/

// Weather App using API ahead.

// Conditional Operators 
// ==, ===, >, <, <=, > =, !=, !==

// Function
/*
//This is a function sayMyName and this have 0 arguments.
function sayMyName(){
  console.log("Abhijit Sahoo")
}
sayMyName()
function sayMyName2(name){
  console.log(name)
}
sayMyName2("Abhijit Sahoo, son of Sibakar Sahoo and Smruti Sudha Sahoo")


//This is a function greetings and this have 1 arguments called "name ".
function greeting(name){
  console.log("Hi my name is "+ name +", nice to meet you")
}
greeting("Abhijit Sahoo")

// Template Literals
function greeting2(name){
  console.log(`Hi my name is ${name}, nice to meet you`)
}
greeting2("Abhi Sahoo")

// const myFunc(arg1, arg2, arg3) => {
//  the function
// }

*/
/*
function sum(a,b){
  // console.log(a+b)
  return a+b
}
// result = sum(1,2)
// console.log(result)

// Build Tip Calculor App using Functions 
function tipcalculator(totalBill, tipPercent){
 tipPercent = tipPercent/100
 tipAmount = Number(totalBill*tipPercent)
 return totalBillAmount = sum(totalBill,tipAmount)
}
let totalBillA = tipcalculator(100,10)
console.log("Total Bill Amount = ", totalBillA)
// totalBill = tipcalculator(100,20)
// console.log("Total Bill Amount = ", totalBillAmount)
*/
/*
//Arrow Functions in JS  

Regular Function (old)
function myFunction(name){
  console.log(`hi ${name}`)
}
Arrow Function (New)
const myFunction = (name) => {
  console.log(`hi ${name}`)
}

// Arrow Function with explicit return 
const sumArrow = (a,b) => {
  return a+b
}

// Arrow Function with implicit return; 
// For implicit remove squigglies/curly braces
const sumArrow2 = (a,b) => return a+b
*/

// Function Exercise
/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/
/*
function add(a,b){
  //Add function here
  return sum = a+b
}

function sub(a,b){
  //Subtract function here
  return minus = a-b
}

const div = (a,b) => {
  //Divide function here
  return divide = (a)/b
}

const mul = (a,b) => {
  //Multiply function here
  return multiply = a*b
}
function calculate(){
  console.log('Hello from the Function exercise')
  console.log(add(10,20))
  console.log(sub(10,20))
  console.log(div(10,0))
  console.log(mul(10,20))
}
calculate()

  // TODO: create a function that console logs the result of any of the above operations.
*/

// Arrays
// const groceries = ['🍌', '🍎', '🍊', '🍐']
// console.log(groceries)

// grab the 2nd index
// console.log(groceries[2])

// Array methods
// groceries.push('🍪')
// console.log(groceries)

// groceries.push('🫐')
// console.log(groceries)

// Array Slice
// start from 0 INCLUSIVE and UP to 6 [0, 1, 2, 3, 4, 5]
// console.log(groceries.slice(0, 6))

// console.log(groceries.slice(1, 4))
// array methods (slice, push, indexOf, length)
// console.log(groceries.indexOf('🍐'))
// console.log(groceries.length)
 /*
// OBJECTS {}
// key: value pairs

// const myObject = {
//   key1:'Value 1',
//   key2:'Value 2'
// }

const person = { 
  name: 'Leonardo', 
  shirt: 'white' 
}


// Accesing Objects
// Dot Notation vs Bracket Notation
// - Dot Notation
// object.properties

console.log(person.name)
console.log(person.shirt)

// - Bracket Notation
// object['properties']

console.log(person['name'])
console.log(person['shirt'])

// assign object
 //person.phone = '1-222-333-4444'
 person['phone'] = '1-222-333-4444'
 console.log(person.phone)
// Kind of like push in array  
// We keep the numbers in quotes to display it as string else it will minus all the numbers  

 console.log(person)
// Objects with functions
// ES6 Arrow functions,Template literals,Objects,Methods - a property containing a function defination
// car.name is property and car.start() is  method

// METHOD NOTES 4,5,6

const introducer = (name, shirt, assets, liabilities) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: assets,
    liabilities: liabilities,
    networth: function(){
      return this.assets - this.liabilities
    }
  }
  const intro = `Hi, my name is ${person.name}, I am wearing ${person.shirt} colour shirt and my networth is $${person.networth()} USD`
  return intro
}
console.log(introducer("Abhijit Sahoo" , "Black" , 200000 , 30000))
console.log(introducer("Leonardo De Caprio" , "White" , 100000 , 50000))
*/
// FOR LOOPS    

// let fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for (let i=0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// for (const fruit of fruits) {
//   console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5, 6]
// // for (let i=0; i < numbers.length; i++) {
// //   console.log(numbers[i])
// // }

// const double = (numbers) => {
//   let result = []
//   for (const number of numbers) {
//     result.push(number * 2)
//   }

//   return result
// }

// console.log(double([1, 2, 3, 4, 5, 6]))

// [2, 4, 6, 8, 10, 12]

// ARRAYS & OBJECTS EXERCISE
/*
const howManyLetters = (phrase) => {
  let result = 0;
  for(const index in phrase){
    console.log(Number(index))
    result = Number(index)+1
  }
  return {result : result}
  return {result}
}
const phrase = prompt("Write your phrase")
console.log(howManyLetters(phrase))

// Second way
const howManyLetters = (phrase) => {
  return {result : phrase.length}
}
const phrase = prompt("Write your phrase")
console.log(howManyLetters(phrase))

const sumArray = (numbers) => {
  let result = 0;
  for(const number of numbers){
    result = result+number
  }
  return { result } 
}
const nums = [1,2,3,4,5]
console.log(sumArray(nums))


const findMax = (numbers) => {
  let max = numbers[0]
  let min = numbers[0]
  for(const number of numbers){
    if(number > max){
      max = number
    }
  }
  return {max : max}

const nums = [18,24,30,48,25]
console.log(findMax(nums))
*/ 
/*
const letterFrequency = (phrase) => {
  let frequency = {}
  for(const letter of phrase){
    if(letter in frequency){
      frequency[letter] += 1
    }
    else{
      frequency[letter] = 1
    }
  }
  return frequency
}
//console.log(letterFrequency('haha'))

// Incremental Operators ++, --, += , -+

const wordFrequency = (phrase) => {
  // let frequencyW = {}
  // let words = phrase.split(' ')
//   for(const word of words){
//     if(word in frequencyW){
//       frequencyW[word] += 1
//     }
//     else{
//       frequencyW[word] = 1
//     }
//   }
//   return frequencyW
  const words = phrase.split(' ')
  return letterFrequency(words)
}
const userInput = prompt("Write the sentence")
console.log(wordFrequency(userInput))
*/

// EXERCISE

// Write a function that takes a parameter (hours) and converts
// it to seconds

// const howManySeconds = (hours) => {
   // Your function should return an integer
   // of how many seconds are in the hour
//   let seconds = Number(hours*3600)
//   return seconds
// }
// console.log(howManySeconds(24))
//Topics: Variables,functions, Math

// Array Methods - Higher Order Functions
// - map, filter, reduce

// [1,2,3,4].map(numbers => console.log(numbers))

// let result = [1,2,3,4].map(numbers => numbers*2)
// console.log(result)

// const doubleValues = (numbers) => {
//   return numbers.map(nums => nums*2)
// }
// console.log(doubleValues([11,22,33,44]))

// filter([1,2,3,4,5,6], 3) 👉 [4, 5, 6]
// const filter = (numbers, greaterThan) => {
//   let result = []
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number)
//     }
//   }
//   return result
// }
// console.log(filter([1, 2, 3, 4, 5, 6], 2))

// const nums = [1, 2, 3, 4, 5, 6]
// console.log(nums.filter(num => num > 4 || num < 2))

// LOGICAL OPERATORS - && , || , !
 
// const actors = [
//   { name: 'johnny', netWorth: 2000000 },
//   { name: 'amber', netWorth: 10 },
//   { name: 'matt', netWorth: 170000000 },
//   { name: 'brad', netWorth: 300000000 },
//   { name: 'leonardo', netWorth: 10000000 },
// ]

// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)
// let names = result.map(actor => actor.name).join(', ')
// console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))

// playground.innerHTML = `<h1>${names}</h1>`

//REDUCE
//Sum : Think Reduce
//Reduce takes in a function as an argument
//Reduce loops and gives you back the accumulator
// const nums = [1, 2, 3, 4]
// ES5
//const result = nums.reduce(function(prev,curr){
//    return prev + curr
// })
//ES6 
//const result = nums.reduce(prev,curr) => prev+curr

// function multiply(a,b){
//   return a*b
// }
// const mulResult = nums.reduce(multiply)
// const result = nums.reduce((a, b) => a + b, 0)

console.log(mulResult)

// select a random element from an array
// randomFruit([1, 2]) 👉 2
// randomFruit([1, 2]) 👉 1
// const randomFruit = (fruits) => {
//   const randomNumber = Math.floor(Math.random() * fruits.length)

//   console.log(randomNumber)

//   return fruits[randomNumber]
// }

// fruits = ['🍌', '🍎', '🍊', '🍐']
// console.log(randomFruit(fruits))

// if else if else
// rainy (1), sunny (-1), overcast (0)
// const weatherScorer = (weather, weather2) => {
//   let score

//   if (weather == 'rainy' && weather2 == 'overcast') {
//     score = 2
//   } else if (weather == 'rainy') {
//     score = 1
//   } else if (weather == 'sunny') {
//     score = -1
//   } else {
//     score = 0
//   }

//   return score
// }

// console.log(weatherScorer('rainy', 'sunny'))

// DOG API
// https://dog.ceo/api/breeds/image/random
