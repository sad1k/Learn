let arr1 = [2,5,2,34,2,5]
let arr2 = [1,2,3,0,4,23,3]
// конкатенация массивов с помощью оператора
let concat = [...arr1, ...arr2]

// поверхностная копия массива 
let copy = [...arr1]
console.log(copy === arr1) // false


