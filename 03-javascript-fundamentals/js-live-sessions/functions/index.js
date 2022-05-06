// Named function

function greeting (name) {
    console.log("Hello " +name);
}

greeting ("Harry")

// Function expressions

const farewell = function (username) {
    console.log(`Bye ${username}`);
}
farewell("my friend")

// Arrow functions

const fullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}
fullName("Blaise", "Buckland")

// Write a function to find the perimeter of a rectangle

const calculatePerimeterRectangle = (width, height) => {
    return (width + height) * 2;
}
console.log(calculatePerimeterRectangle(12, 50));