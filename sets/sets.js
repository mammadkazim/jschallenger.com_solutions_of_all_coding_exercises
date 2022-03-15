//1
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction1(set, val) {
    return set.has(val)
}
console.log(myFunction1(set, 'aba'))

//2
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction2(set) {
    return Array.from(set)
}
//NOCITE! you can create array from array-like and iterable objects such as maps,sets, strings,nodelists
//or
function myFunction21(set) {
    return [...set]
}

//3
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function myFunction3(a, b) {
    return new Set([...a, ...b])
}

const a = new Set(['123'])
const b = new Set(['234'])
console.log(myFunction3(a, b))

//or
function myFunction31(a, b) {
    const result = new Set(a);
    b.forEach((el) => result.add(el));
    return result;
}
console.log(myFunction31(a, b))

//4
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction4(a, b, c) {
    return new Set([a, b, c])
}

//or
function myFunction41(a, b, c) {
    const set = new Set();
    set.add(a);
    set.add(b);
    set.add(c);
    return set;
}

//5
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function myFunction5(set, val) {
    set.delete(val)
    return set
}

//6
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction6(set, arr) {
    arr.forEach(elem => {
        if (!set.has(elem)) set.add(elem)
    })
    return set
}

//or
function myFunction61(set, arr) {
    arr.forEach((e) => set.add(e));
    return set;
}

//7
// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function myFunction7 (a, b) {
    const c = new Set()
    a.forEach(e => {
        if (b.has(e)) c.add(e)
    })
    return c
}

const set71 = new Set([1,2,3])
const set72 = new Set([2,3,4,5])
console.log(myFunction7(set71,set72))

//or
function myFunction72(a, b) {
    const c = new Set();
    a.forEach(e => b.has(e) && c.add(e));
    return c;
  }