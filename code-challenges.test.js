// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("capedSentence", () => {

  it("a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

  expect(capedSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// create a function that takes in array
// create a variable that with the .map function and the .toUpperCase that instantiates the values of name and occupation in a string
// return string

// b) Create the function that makes the test pass.

function capedSentence(arr){
  const sentence = arr.map.toUpperCase(person => `${people.name} is ${people.occupation}`)
  return sentence
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// take in a array and use the filter method to grab the idex of the values that are integers
// use the .map to iterate through them and and modoel to divide by 3
// return the value


describe("of3Remainders", () => {

  it("a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

  expect(of3Remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(of3Remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// b) Create the function that makes the test pass.

function of3Remainders(arr){
  const rems = arr.filter(num => Number.isInteger(num))
                  .map(num => num % 3)
  return rems
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


describe("sumCubed", () => {

  it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {

  expect(sumCubed(cubeAndSum1)).toEqual(99)
  expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.

// create a function that takes in a array 
// create a const that uses the .map method and iterates through the array taking it to the 3rd power
// use that variable and the .reduce method with the direction to add the values to get one sum 
// return sum

function sumCubed(arr){
  const cubed = arr.map(num => num ** 3)
  const sum = cubed.reduce((acc, num) => acc + num)
  return sum
}