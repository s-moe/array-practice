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
  ...numArray.slice(2, 3)

]
console.log(newNumArray)
console.log(numArray)
// numArray.length is used to get the end of the array
console.log(numArray.slice(1, numArray.length))
//concat to combine 2 arrays: const b = a1.concat(a2)
//or use something like this: const b = [...a1, ...a2]


//.fill
const b = Array(6).fill(4)
console.log(b)
//destructuring
// const [first, second, third, ...others] = b
console.log(b)
// console.log(b[first])

const fruit = ['apple', 'pear', 'pineapple']
//can be named anything, it's concerned to the position
const [first, second, third] = fruit
console.log(fruit)
console.log(first)
console.log(second)
// arrays are not === to each other
//this will return false
console.log([1, 2, 3] === [1, 2, 3])

const nums = [1, 2, 3]
const numsCopy = nums
//this will return true because of its reference being the same
console.log(nums === numsCopy)
