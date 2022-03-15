//1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction1(a, b) {
    return a + b;
}

// 2
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction2(a, b) {
    return a === b;
}
//or
function myFunction21(a, b) {
    answer = (a === b) ? true : false
    return answer
}
console.log(myFunction2(2, 2))
console.log(myFunction21(1, 2))

// 3 
// Write a function that takes a value as argument
// Return the type of the value
function myFunc3(a) {
    return typeof a
}
console.log(myFunc3(2))

// 4
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction4(a, n) {
    return a.slice(n - 1, n)
}

console.log(myFunction4("asdfdddd", 3))
//or
function myFunction41(a, n) {
    return a[n - 1];
}

// 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction5(a) {
    return a.slice(3);
}

//6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction6(str) {
    return str.slice(-3);
}

//or
function func61(str) {
    let newStr = ''
    for (let i = str.length - 3; i < str.length; i++) {
        newStr += str[i]
    }
    return newStr
}
console.log(func61('123456701z'))

//7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
    return a.slice(0, 3);
}

//8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction8(a) {
    return a.slice(0, a.length / 2);
}

// 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function myFunction9(a) {
    return a.slice(0, -3)
}

//10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction10(a, b) {
    return a * b / 100
}

//11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
    return ((a + b - c) * d / e) ** f
}

//12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction12(a) {
    return a % 2 === 0
}

// 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunc13(a, b) {
    let counter = 0
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) counter++
    }
    return counter
}
console.log(myFunc13('a', 'a da saf, radddd'))

//or b split by a 
function myFunction131(a, b) {
    return b.split(a).length - 1
}
console.log(myFunction131('a', 'a da saf,as radddd'))

//14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction14(a) {
    return a === Math.trunc(a)
}

// 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction15(a, b) {
    return a < b ? a / b : a * b
}

// 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction16(a, b) {
    return a.split(b).length > 1 ? b + a : a + b
}

//or 
function myFunction161(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
}

// 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction17(a) {
    return Number(a.toFixed(2))
}
console.log(myFunction17(32.2567)) // output: '32.25'

//18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction18(a) {
    let numArr = []
    String(a).split("").forEach(e => numArr.push(Number(e)))
    return numArr
}
console.log(myFunction18(5624))
// !notice: forEach method does not change the original array and thus returns undefined.Therefore we need to assign the result to a new array. But map method changes the array.
//or
function myFunction181(a) {
    return String(a).split("").map(e => Number(e))
}
console.log(myFunction18(56994))

// or with for loop
function myFunction182(a) {
    a = String(a).split("")
    for (let i = 0; i < a.length; i++) {
        a[i] = Number(a[i])
    }
    return a
}
console.log(myFunction182(322567))

//19
function myFunction19(a, b) {
    return (a.charAt(0).toUpperCase() + a.slice(1)).split('').filter(item => item !== "%").join("") + b.split('').filter(item => item !== "%").reverse().join("")
}
console.log(myFunction19('c%ountry', 'edis'))

//or
function myFunc191(a, b) {
    return (a.charAt(0).toUpperCase() + a.slice(1)).replace('%', '') + b.replace('%', '').split('').reverse().join('')
}
console.log(myFunc191('co%untry', 'edis'))
//or
function myFunc192(a, b) {
    const func = x => x.replace('%', '');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
console.log(myFunc192('down', 'nw%ot'))

// 20
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function foo20(a) {
    let counter = 0
    for (let i = 1; i <= a / 2; i++) {
        a % i === 0 ? counter++ : counter
    }
    if (counter < 2) {
        return a
    } else {
        outer: for (let j = 0;; j++) {
            a++
            let counter2 = 0
            for (let i = 1; i <= a / 2; i++) {
                a % i === 0 ? counter2++ : counter2
            }
            if (counter2 < 2) {
                return a
            } else if (counter === 2) {
                continue outer
            }
        }
    }
}

console.log(foo20(12))

// or
function foo201(a) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n
}
console.log(foo201(8))

// 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function func21(x, y) {
    if (x % y === 0) {
        return x
    } else {
        for (let i = 0;; i++) {
            x++
            if (x % y === 0) {
                return x
            }
        }
    }
}
console.log(func21(22, 3))

// or
function myFunc212(x, y) {
    while (x % y !== 0) x++;
    return x;
}
console.log(myFunc212(21, 5))

// 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction22(a, b) {
    let arr = a.split('')
    for (let i = -3; i > 0 - arr.length; i -= 3) {
        arr.splice(i, 0, b)
        i--
    }
    return arr.join('')
}
console.log(myFunction22('abcyyyyyde', '$'))
//or
function func222(a, b) {
    a = a.split('')
    for (let i = a.length - 3; i > 0; i -= 3) {
        a.splice(i, 0, b)
    }
    return a.join('')
}
console.log(func222('23456789012', 'a'))

//or
function myFunction223(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}
console.log(myFunction223('abcdefgh', '1'))

//23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunc23(str) {
    let strCorrectArr = []
    let strArray = []
    for (let i = 0; i < str.length; i++) {
        strArray[i] = str.charCodeAt([i]) + 1
        strCorrectArr.push(String.fromCharCode(strArray[i]))
    }
    return strCorrectArr.join('')
}
console.log(myFunc23('bnchmf'))

// or  using map method
function myFunction232(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt() + 1));
    return correctedArray.join('');
}
console.log(myFunction232('bgddrd'))