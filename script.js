const fruits = ['apple', 'pear', 'berry']

const moreFruits = [...fruits, 'banana']

console.log(moreFruits)
//spread operator expands the array
//this clones the array. doesn't work for objects inside the array - only primitive types

moreFruits.pop()
console.log(moreFruits)


let a = [ 1, 'GS', ['dob', ['addr']]]
console.log(a[0])

const numArray = [1, 2, 3]
numArray.slice(0, 1)
numArray.slice(2, 4)
const newNumArray = [
  ...numArray.slice(0,1),
  ...numArray.slice(2, 4)

]
console.log(newNumArray)