const numbers = [1, 100, 35, 90];

// forEach - iterates over the array
numbers.forEach((number)=> {
    
})

// map - returns a new array. Must use return keyword

//filter - creates a new array from some of the items on the original array, according to some condition(s)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61];

// log the ages to the console

ages.forEach((age) => {
    console.log(age);
})

// create a string for each age saying "I am X years old"

ages.forEach((age) => {
    console.log(`I am ${age} years old`)
})

// create a new array to show how old each person will be in 5 years

const ageIn5Years = ages.map((age) => {
    return age + 5;
})
console.log(ageIn5Years);

// create an array of the square root of the ages

const sqrtAges = ages.map((age) => {
    return Math.sqrt(age);
})
console.log(sqrtAges);

// Create a new array with all the ages that are over 18

const over18Ages = ages.filter((age) =>
{
    return age >= 18;
});
console.log(over18Ages)

// Create an array with all the words which have less than 5 letters

const colours = ["red", "yellow", "pink", "purple", "green"];

const shortColourNames = colours.filter((colour) => {
    return colour.length < 5;
})
console.log(shortColourNames)

// create a new array containign even numbers from the ages array

const evenAges = ages.filter((age) => {
    return age % 2 === 0;
})
console.log(evenAges);