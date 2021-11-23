const fruits = ['apple', 'pear', 'berry']

const moreFruits = [...fruits, 'banana']

console.log(moreFruits)
//spread operator expands the array
//this clones the array. doesn't work for objects inside the array - only primitive types

moreFruits.pop()
console.log(moreFruits)
