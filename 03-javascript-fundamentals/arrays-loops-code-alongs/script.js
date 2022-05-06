/* // 1. Create a coaches array

const coaches = ["Andy", "Bex", "Jake", "Sam"];
console.log(coaches);
console.log(coaches[1]);

// 2. Create an array of pets


const pets = ["Pongo", "Patch", "Daisy"];
console.log(pets[0])

// 3. Create a sample for loop

for (let index = 0; index < 5; index++) {
    console.log(`The index on this loop was ${index}`)
}

for (let index = 0; index < pets.length; index++) {
    console.log(`I have a pet called ${pets[index]}`)
}
*/

// 1. declare an array  of strings

const fruit = ["apple", "kiwi", "plum", "lemon"];

// 2. declare an array of numbers

const years = [1990, 1992, 1965, 2000];

// 3. accessing these values

console.log(years[3]);

// access last value in fruit array
let lastItemFruit = fruit.length-1;
console.log(fruit[lastItemFruit]);

// change a value in an array

fruit[0] = "dragon fruit";

console.log(fruit[0]);

// finding the index of a value

console.log(`Kiwi is at index ${fruit.indexOf("kiwi")}`);

// checking if a value is in an array

console.log(`Orange is an option for fruit: ${fruit.includes("orange")}`);

// 4. array of objects

/* const students [
    {
        name: "Blaise",
        age: 26;
    }, 
    {
        name: "Olivia",
        age: 28;
    }
];

console.log(students[1].age);
*/ 


// loops

const cats = ["Emmy", "Liesl", "Spyro", "Mini"]

for ( let i=0; i < cats.length; i++) {
    if (cats[i] == "Liesl") {
        ;
    } else {
        console.log(cats[i])
    }

}


// 5. array of arrays