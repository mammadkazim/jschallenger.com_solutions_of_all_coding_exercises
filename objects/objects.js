//1
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction(obj) {
    return obj.country
  }

//2
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function myFunction(obj) {
    return obj['prop-2']
  }

//3
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction(obj, key) {
    return obj[key]
  }

//4
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

//There are mainly two methods to check the existence of a key in JavaScript Object.
// The first one is using “in operator” and the second one is using “hasOwnProperty() method”.
const obj4 = {
    b: 5,
    c: true,
    d: 'f'
}
let str = 'y'
let str2 = 'b'

function myFunction4(a, b) {
    return a[b] ? true : false
}

console.log(myFunction4(obj4, str))

// or with in operator => key in object
function myFunction41(a, b) {
    return b in a;
}
console.log(myFunction4(obj4, str2))

// or with hasOwnProperty() method

function myFunction42(a, b) {
    return a.hasOwnProperty(b);
}
console.log(myFunction4(obj4, str2))

//5
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

function myFunction5(a) {
    return {
        key: a
    }
}
console.log(myFunction5("s"))

// 6
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction6(a, b) {
    return {
        [a]: b
    };
}
console.log(myFunction6('name', 'john'))

//7
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction7(a, b) {
    const obj = {}
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i]
    }
    return obj
}
console.log(myFunction7(['a', 'b', 'c', 'd'], [1, 2, 3, 4]))

//or with reduce method
function myFunction71(a, b) {
    return a.reduce((acc, cur, i) => ({
        ...acc,
        [cur]: b[i]
    }), {});
}
console.log(myFunction71(['aa', 'bb', 'cc', 'dd'], [11, 22, 33, 44]))

// 8
// Write a function that takes an object (a) as argument
// Return an array with all object keys

function myFunction8(a) {
    const arr = []
    for (const key in a) {
        arr.push(key)
    }
    return arr
}
console.log(myFunction8({ a: '1', b: '2', c: '3', d: '4' }))

// or with Object.keys method
function myFunction81(a) {
    return Object.keys(a)
}
console.log(myFunction81({ a: '1', b: '2', c: '3', d: '4' }))

// 9
// Write a function that takes an object (a) as argument
// Return the sum of all object values

const obj9 = {
    a: '1',
    b: '2',
    c: '3',
    d: '4'
}
function myFunction9(a) {
    let result = 0;
    for (const key in a) {
        result += Number(a[key]) // or just +a[key]
    }
    return result
}
console.log(myFunction9(obj9))

// or with Object.values and array reduce method
function myFunction91(a) {
    return Object.values(a).reduce((acc,cur)=>+acc + +cur,0)
}
console.log(myFunction91(obj9))

// 10
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction10(obj) {
    delete obj.b
    return obj
 }

 // or with rest operator

 function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
  }

// 11
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction11 (x, y){
let w
w = y.b
delete y.b
y.d = w
return {...x,...y}
}
console.log(myFunction11({a:'1',b:'1'},{c:'2',b:'2'}))

// or
function myFunction111(x, y) {
    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };
  }

// 12
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction12 (a, b){
    for(let key in a){
        a[key] = a[key]*b
    }
    return a
}
console.log(myFunction12({a:1,b:2},7))

function myFunction121(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
 }
 console.log(myFunction121({a:8,b:9},100))

// 13
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction13(obj) {
   
    return Object.entries(obj).reduce((acc,[key,val])=>{
       return {...acc,[val]:key}
    },{})
}
console.log(myFunction13({a:5,b:'lll'}))

// 14
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction14(obj) {
  for(let key in obj){
    if(obj[key].trim() === '') obj[key] = null
}
return obj
}
console.log(myFunction14({ a: 'a', b: 'b ', c: ' ', d: '' }))

// 15
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction15(obj) {
    const newObj = {}
  for(let key in obj){
      switch(key){
        case 'fn':
            newObj[key] = obj[key]
            break
        case 'ln':
            newObj[key] = obj[key]
            break
        case "size":
            newObj[key] = obj[key]+'cm'
            break
            case 'weight':
            newObj[key] = obj[key]+'kg'
            break
      }
}
return newObj
}
console.log(myFunction15({fn: 'Lisa', email: 'matthew@mueller.de', ln: 'Müller', age: 17, size: 175, weight: 67}))
console.log(myFunction15({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',size: 175,}))
console.log(myFunction15({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))

// or with if else
function myFunction151 (obj){
const newObj = {}
for(key in obj){
     if(key == 'fn'){
        newObj.fn = obj.fn;
        } else if(key == 'ln'){
            newObj.ln = obj.ln;
         } else if (key == 'size'){
            newObj.size = obj.size +'cm';
         }else if (key == 'weight'){
            newObj.weight = obj.weight +'kg';
         }
        }
         return newObj
}
console.log(myFunction152({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
console.log(myFunction152({fn: 'Lisa',email: 'matthew@mueller.de', ln: 'Müller', age: 17, size: 175, weight: 67}))

// or with derstructuring
function myFunction152(obj) {
    return {
      fn: obj.fn,
      ln: obj.ln,
      ...(obj.size && { size: `${obj.size}cm` }),
      ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
  }

//16
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction16 (arr, str){
const newArr =[...arr]
for(let i = 0; i<arr.length; i++){
   newArr[i].continent = str
}
return newArr
}
console.log(myFunction16 ([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))
// or with map method
function myFunction161(arr, str) {
    return arr.map((obj) => ({ ...obj, continent: str }));
  }
  console.log(myFunction16 ([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'))

//17
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction17(a){
    const obj = {}
    a.forEach(elem => {
        let key = 0
        for(let i = 0; i < a.length; i++){
            if(elem === a[i]) key++
            obj[elem] = key
        }
    })
    return obj
}

console.log(myFunction17([1,2,3,3,5,5]))

// or with reduce method
function myFunction171(a) {
    return a.reduce((acc, cur) => {
        return { ...acc, [cur]: (acc[cur] || 0) + 1 };
    }, {});
 }
 console.log(myFunction171([1,2,3,3,5,5]))