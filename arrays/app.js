//1
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction1(a, n) {
   return a[n - 1];
}

//2
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction2(a) {
   return a.slice(3);
}

//3
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function myFunction3(a) {
   return a.slice(-3);
}

//4
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction4(a) {
   return a.slice(0, 3);
}

//5
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction5(a, n) {
   return a.slice(-n);
}

// 6 
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction6(a, b) {
   for (let i = 0; i < a.length; i++) {
      if (a[i] === b) {
         a.splice(i, 1)
      }
   }
   return a
}
//or with filter method
function myFunction61(a, b) {
   return a.filter(e => e !== b)
}

//7
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction7(a) {
   return a.length;
}

//8 
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction8(a) {
   return a.filter(num => num < 0).length
}

//9
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction9(arr) {
   return arr.sort((a, b) => b - a)
}

//10 
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction11(arr) {
   return arr.sort()
}

//11
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction11(arr) {
   return arr.reduce((prev, item) => prev + item)/arr.length
}

//12
// Write a function that takes an array of strings as argument
// Return the longest string
const arr12 = ['h', 'hhhh', 'hh', 'hhhhh']

function myFunction12(arr) {
   let biggest = ''
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > biggest.length) {
         biggest = arr[i]
      }
   }
   return biggest
}
console.log(myFunction12(arr12))

//or using reduce method 
function myFunction121(arr) {
   return arr.reduce((acc,cur) => acc.length > cur.length ? acc : cur)
}

// 13
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
const arrEqual = [1, 1, 1, 1, 1];
function myFunction13(arr) {
   return arr.filter(item => item === arr[0]).length === arr.length
}
console.log(myFunction13(arrEqual))

// or with set method
function myFunction131(arr) {
   return new Set(arr).size === 1
}

// 14
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
const arrays14 = [[1, 2, 3],[4, 5, 6]]

function myFunction14(...arrays14) {
   const arr = []
   return arr.concat(...arrays14)
}
console.log(myFunction14(...arrays14))

// or with flat method
function myFunction141(...arrays) {
   return arrays.flat()
}
console.log(myFunction141(...arrays14))

// or flattening using reduce method
const flatteningF = (...arrays) => {
   const flattened = arrays.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
         acc = acc.concat(cur)
      } else {
         acc.push(cur)
      }
      return acc
   }, [])
   return flattened
}
console.log(flatteningF(...arrays14))

//15
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
const array15 = [{a: 1, b: 2}, {a: 5, b: 4}]

function myFunction15(arr) {
   return arr.sort((a, b) => a.b - b.b)
}
console.log(myFunction15(array15))

//or
function myFunction151(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}

// 16 Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction16(a, b) {
   const merged = [...a, ...b];
   for (let i = 0; i < merged.length; i++) {
      for (let j = 0; j < merged.length; j++) {
         if (merged[i] === merged[j]) {
            if (i === j) {
               continue
            }
            merged.splice(j, 1)
         }
      }
   }
   return merged.sort((x, y) => x - y)
}
const arr161 = [1, -2, 5, 8, 222];
const arr162 = [199, -21, 55, 8, 90];
console.log(myFunction16(arr161, arr162))

//or
function myFunction161(a, b) {
   return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

function myFunction162 (a, b){
   const set = new Set([...a,...b])
   return [...set].sort((a,b)=>a-b)
}
console.log(myFunction162(arr161, arr162))

//17
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction17(a, b) {
   let f = a.filter(item => item > b)
   return f.reduce((acc, cur) => acc + cur)
}
console.log(myFunction17([20, 7, 9, 12], 8))

//or
function myFunction171(a, b) {
   return a.reduce((acc, cur) => cur > b ? acc + cur : acc, 0)
}
console.log(myFunction171([1, 7, 9, 12], 8))
//or
function myFunction172(a, b) {
   return a.reduce((acc, cur) => {
      if (cur > b) return acc + cur
      return acc
   }, 0)
}
console.log(myFunction172([1, 7, 9, 12], 8))

//18
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction18(min, max) {
   const arr = []
   for (let i = min; i <= max; i++) {
      arr.push(i)
   }
   return arr
}
console.log(myFunction18(-2, 8))

//19
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction19(arr) {
   const obj = {}
   const arrB = []
   for (let i = 0; i < arr.length; i++) {
      arrB.push(arr[i].charAt(0))
      obj[arrB[i].toLowerCase()] = arr.filter(item => item.charAt(0) === arrB[i])
   }
   return obj
}

console.log(myFunction19(['Alf', 'Alice', 'Ben']))
console.log(myFunction19(['Ant', 'Bear', 'Bird']))
console.log(myFunction19(['Berlin', 'Paris', 'Prague']))

//or
function myFunction191(arr) {
   return arr.reduce((acc, cur) => {
      const firstLetter = cur.charAt(0).toLowerCase();
      return {
         ...acc,
         [firstLetter]: [...(acc[firstLetter] || []), cur]
      };
   }, {});
}
console.log(myFunction191(['Berlin', 'Paris', 'Prague']))

//20
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function myFunction20(arr, num) {
   if (num < 6) {
      arr.unshift(0)
   } else {
      arr.unshift(num)
   }
   return arr
}
console.log(myFunction20([1, 2, 3, 4, true], 7))

//or
function myFunction201(arr, num) {
   return [...(num > 5 ? [num] : [0]), ...arr];
}
console.log(myFunction201([1, 2, 3, 4, true], 30))

//21
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction21(a, n) {
   const newArr = [];
   for (let i = n; i <= a.length; i += n) {
      if (n <= 0) {
         break
      }
      newArr.push(a[i - 1])
   }
   return newArr
}
console.log(myFunction21([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
console.log(myFunction21([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5))

//or
function myFunction211(a, n) {
   let rest = [...a];
   let result = [];
   for (let i = 0; i < a.length; i++) {
      if (rest.length < n) break;
      result.push(rest[n - 1]);
      rest = rest.slice(n);
   }
   return result;
}
console.log(myFunction21([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3))