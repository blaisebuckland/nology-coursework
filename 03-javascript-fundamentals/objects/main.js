// // OBJECT SYTAX

// const exampleObject = {
//     key : "value", // COMMA TO SEPARATE KEY:VALUE PAIRS
//     types : "any",
//     method() {
//         // DO SOMETHING
//         // this keyword is to refer to the object
//         return this.key + " " + this.types;
//     }
// }

// // ACCESSING OBJECTS
// // DOT NOTATION
// console.log(exampleObject.key);
// console.log(exampleObject.types);
// // CALLING A METHOD
// console.log(exampleObject.method());
// // SQUARE BRACKETS
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);

// // ADDING A KEY:VALUE PAIR TO THE OBJECT
// exampleObject.newKey = "new value";
// console.log(exampleObject);

/* const studentContainer = document.querySelector(".students-container");

const person = {
    firstName: "Blaise",
    lastName: "Buckland",
    quote: "It has to be me, it can't be anyone else",
    skills: ["CSS", "HTML", "JavaScript"],
    imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getSkillsList() {
        const skillsList = this.skills.map(skill => {
            return `<li>${skill}</li>`
        })
        return skillsList.join("\n");
    },
    getProfile() {
    const profileHTML = `
    <article class="student-card">
    <img src=${this.imgURL}/>
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkillsList()}</ul>
    </article>`  
    return profileHTML;
    }
}

studentContainer.innerHTML = person.getProfile(); */

// console.log(person);
// console.log(person.firstName + " " + person.lastName);
// console.log(person.getFullName());


// CLASS SYNTAX

// PascalCase -> naming convention for classes
// class ExampleClass {
//     constructor(firstName, lastName, age) {
//     this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age;
//     }
//     greet() {
//         return `Hi my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// // CLASS INHERITANCE SYTNAX

// class ExtendedClass extends ExampleClass {
//     constructor(firstName, lastName, age, subject) {
//         super(firstName, lastName, age),
//         this.subject = subject;
//     }

//     greet() {
//         return `Hi my name is ${this.firstName} ${this.lastName}. I teach ${this.subject}`
//     }
// }
// console.log(new ExtendedClass("Blaise", "Buckland", 26, "JavaScript").greet())

// const exampleOne = new ExampleClass ("Blaise", "Buckland", 26);
// const exampleTwo = new ExampleClass ("Matt", "Nelson", 28);

// console.log(exampleOne)
// console.log(exampleOne.greet())
// console.log(exampleTwo.greet())

class Profile {
    constructor (firstName, lastName, quote, skills, imgURL) {
        this.firstName = firstName,
        this.lastName =lastName,
        this.quote = quote,
        this.skills = skills,
        this.imgURL = imgURL;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getSkillsList() {
        const skillsList = this.skills.map(skill => {
            return `<li>${skill}</li>`
        })
        return skillsList.join("\n");
    }
    getProfileHTML() {
    const profileHTML = `
    <article class="student-card">
    <img src=${this.imgURL}/>
    <h2>${this.getFullName()}</h2>
    <blockquote>${this.quote}</blockquote>
    <h3>Skills</h3>
    <ul>${this.getSkillsList()}</ul>
    </article>`;  
    return profileHTML;
    }
}

class PremiumProfile extends Profile {
    constructor (firstName, lastName, quote, skills, imgURL, contactLink) {
        super (firstName, lastName, quote, skills, imgURL),
        this.contactLink = contactLink;
    }
    getProfileHTML() {
        const profileHTML = `
        <article class="student-card">
        <img src=${this.imgURL}/>
        <h2>${this.getFullName()}</h2>
        <blockquote>${this.quote}</blockquote>
        <h3>Skills</h3>
        <ul>${this.getSkillsList()}</ul>
        <a href=${this.contactLink}>Contact me</a>
        </article>`;  
        return profileHTML;
        }
}

const studentContainer = document.querySelector(".students-container");

const blaiseBuckland = new Profile("Blaise", "Buckland", "You can never have too many camels", ["HTML", "CSS", "JavaScript"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png");
const mattNelson = new Profile("Matt", "Nelson", "The place of Gloucester Road", ["HTML", "CSS", "JavaScript"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png");
const xavinenneBuckland = new PremiumProfile("Xavienne", "Buckland", "Always walk on the sunny side of life", ["CSS", "HTML"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png", "https://developer.mozilla.org/en-US/");

studentContainer.innerHTML += blaiseBuckland.getProfileHTML();
studentContainer.innerHTML += mattNelson.getProfileHTML();
studentContainer.innerHTML += xavinenneBuckland.getProfileHTML();