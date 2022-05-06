// const car = {
//     make: "Tesla",
//     model: "Model S",
//     colour: "Black",
//     yearOfManufacture: 2021,
//     displayMakeAndModel() {
//         console.log(`${car.make} ${car.model}`)
//     }
// }

// const key = "make"
// console.log(car.key)
// console.log(car[key])

const div = document.querySelector("div");


const person = {
    name: "Ash",
    quote: "\"JS is fun!\"",
    skills: ["HTML", "CSS", "JavaScript"]
}

div.innerHTML = `<h2>${person.name}</h2>
<p>${person.quote}</p>
<ul>
    ${person.skills.map(skill => {
        return `<li>${skill}</li>`
    }).join("")}
</ul>`
