// Challenge

/* I have done each in a slightly different way (declaring a 
function, arrow functions and setting the result as a variable 
or not) but they all work */

// 1. Write a function to find the perimeter of a rectangle.

function calculatePerimeterRectangle (width, height) {
    let perimeterRectangle = width*2 + height*2;
    return perimeterRectangle;
}
// invoking this function
console.log(calculatePerimeterRectangle (2,5));

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
const pi = 3.14;
    const calculateArea = (radius) => {
        const area = pi*radius*radius;
        return area;
    }
//invoking this function
console.log(calculateArea(3));

// 3. Now do the same to find the circumference of a circle...
const calculateCircumference = (radius) => {
    return 2*pi*radius;
}
//invoking this function
console.log(calculateCircumference(8))
