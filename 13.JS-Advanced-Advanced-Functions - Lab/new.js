const itemToRemove = 3
const originalArray = [2, 51, 3, 44]
const newArray = originalArray.filter(item => item !== itemToRemove)
console.log(newArray) // [2, 51, 44]
//console.log(originalArray) // [2, 51, 3, 44]