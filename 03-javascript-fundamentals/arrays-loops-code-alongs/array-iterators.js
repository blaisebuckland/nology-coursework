/* const pets = ["Guinea", "Twinkle", "Pigeon"];

pets.forEach((pet) => {
    console.log(pet);
}
)

const coaches = ["Andy", "Bex", "Sam"]

// use the map method to add the word "coach" before each coach's name

newCoaches = coaches.map((coach) => {
    return "Coach " + coach;
})
console.log(newCoaches);

// use the map method to add the word "pet" before each pet's name in uppercase

newPets = pets.map((pet) => {
    return "pet - " + pet.toUpperCase();
})

console.log(newPets)  */

// create a new array containing only coaches with letter e in name

const coaches = ["Andy", "Bex", "Jake", "Sam"];
const coachesWithLetterE = coaches.filter((coach) => {
    return coach.includes("e");
})
console.log(coachesWithLetterE)

// create a new array containing only students with names longer than 4 letters
const studentNames = ["Blaise", "Olivia", "Dolly", "Mateo"];

const longStudentNames = studentNames.filter((studentName) => studentName.length > 5);

console.log(longStudentNames);
