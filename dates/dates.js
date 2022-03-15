//1
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
    return a.getTime() === b.getTime()
}

//2
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction2(a, b) {
    return a.getTime() >= b.getTime() ? (a.getTime() - b.getTime()) / (1000 * 3600 * 24) : (b.getTime() - a.getTime()) / (1000 * 3600 * 24)
}
console.log(myFunction2(new Date('2020-06-11'), new Date('2020-06-01')))
console.log(myFunction2(new Date('2000-01-01'), new Date('2020-06-01')))

//or
function myFunction21(a, b) {
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24
}
console.log(myFunction21(new Date('2020-06-11'), new Date('2020-06-01')))
console.log(myFunction21(new Date('2000-01-01'), new Date('2020-06-01')))

//3
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction3(a, b) {
    return (a.getDate() == b.getDate() && Math.abs(a - b) < (3600 * 1000 * 24))
}
console.log(myFunction3(new Date('2000/01/01'), new Date('2000/01/01')))

//or
function myFunction31(a, b) {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
}
console.log(myFunction31(new Date('2000/01/01'), new Date('2000/01/02')))

//4
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction4(a, b) {
    return Math.abs(a - b) <= 3600 * 1000
}

//or
function myFunction41(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60
}

//5
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction5(a, b) {
    return b - a > 0
}

//or
function myFunction51(a, b) {
    return a < b
}

//6
// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function myFunction6(a, b) {
    return a.setDate(a.getDate() + b)
}
console.log(myFunction6(new Date(Date.UTC(2000, 01, 01)), 31))

let g = new Date(Date.UTC(2000, 01, 01))
console.log(g.setDate(0))

//7
// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction7(a, b) {
    const obj = {}
    obj.hrs = Math.abs(a.getHours() - b.getHours())
    obj.min = Math.abs(a.getMinutes() - b.getMinutes())
    obj.sec = Math.abs(a.getSeconds() - b.getSeconds())
    return obj
}

//or
function myFunction71(a, b) {
    const dif = Math.abs(a - b);
    const hrs = Math.floor(dif / 1000 / 60 / 60);
    const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
    const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
    return {hrs, min, sec}
}

//8
// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction8(date){
let minutes = date.getMinutes()
return minutes <= 15 ? 15 : minutes <= 30 ? 30 : minutes <=45 ? 45: 60
}
console.log(myFunction8(new Date(2021, 8, 10, 15, 14, 00)))
console.log(myFunction8(new Date(2021, 8, 10, 15, 31, 00)))
console.log(myFunction8(new Date(2021, 8, 10, 15, 22, 00)))

//or
function myFunction81(date) {
    const quarter = 15 * 60 * 1000;
    const closestQuarter = new Date(Math.round(date / quarter) * quarter);
    const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
    return nextQuarter.getMinutes();
    }