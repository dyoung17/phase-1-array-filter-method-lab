const drivers = 
  ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names, driverName){

  return names.filter(function(name){
    return name.toLowerCase() == driverName.toLowerCase()
  })

}

function fuzzyMatch(arr, str){

  let filteredArr =  arr.filter((element) => {
    return str === element.slice(0, str.length)
  })

  return filteredArr
}


// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

function matchName(arr, str){
  let filteredArr = arr.filter((element)=>{
    return str === element.name
  })
  return filteredArr
}

/*
const numbers = [1,2,1, 0, 1,3]
// want to end up with  [2,3 ]
/*

 1. look at second number and check if > 1

2. if so, make a new array if there isn't one already, and add that numbuer in

repeat step 1-2 until all the way through the array
*/
/*

let result = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 15) {
    result.push(numbers[i])
  }
}


//result is [2,3]

strings = ['', 'asdfjasdf', 'asdf']

let result2 = []

for (let i = 0; i < strings.length; i++) {
  if (strings[i].includes('a')) {
    result2.push(strings[i])
  }
}

//result2 is  ['asdfjasdf', 'asdf']



// 

function filter(someArray, someFunction) {
  let finalResult = []

  for (let i = 0; i < someArray.length; i++) {
    if (someFunction(someArray[i])) {
      finalResult.push(someArray[i])
    }
  }
 return finalResult
}

filter(function(num){
  return num > 1
}) // returns [3,5,3]


function addSeven(num) {
  return num + 7
}

addSeven(10)

let x = 10

addSeven(x)

addSeven(3+5+1+1)

function doSomethingTenTimes(fn) {
  for(let i =0 ; i < 10; i++) {
    fn()
  }
}

doSomethingTenTimes(function() {
  console.log("Hello!")
})

function greet() {
  console.log("Hello!")
}

doSomethingTenTimes(greet)

let nums = [1,3,3,5,6,1,-5,60]

nums.filter(function(number) {
  return number > 1
})
// [3,3,5,6,60]


function numGreaterThanOne(number) {
  return number > 1
}

nums.filter(numGreaterThanOne) // same as above

*/