"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        profileHTML = `
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
var ExampleClass =
/*#__PURE__*/
function () {
  function ExampleClass(firstName, lastName, age) {
    _classCallCheck(this, ExampleClass);

    this.firstName = firstName, this.lastName = lastName, this.age = age;
  }

  _createClass(ExampleClass, [{
    key: "greet",
    value: function greet() {
      return "Hi my name is ".concat(this.firstName, " ").concat(this.lastName);
    }
  }]);

  return ExampleClass;
}();

var exampleOne = new ExampleClass("Blaise", "Buckland", 26);
var exampleTwo = new ExampleClass("Matt", "Nelson", 28);
console.log(exampleOne);
console.log(exampleOne.greet());
console.log(exampleTwo.greet());

var Profile =
/*#__PURE__*/
function () {
  function Profile(firstName, lastName, quote, skills, imgURL) {
    _classCallCheck(this, Profile);

    this.firstName = firstName, this.lastName = lastName, this.quote = quote, this.skills = skills, this.imgURL = imgURL;
  }

  _createClass(Profile, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }, {
    key: "getSkillsList",
    value: function getSkillsList() {
      var skillsList = this.skills.map(function (skill) {
        return "<li>".concat(skill, "</li>");
      });
      return skillsList.join("\n");
    }
  }, {
    key: "getProfileHTML",
    value: function getProfileHTML() {
      profileHTML = "\n    <article class=\"student-card\">\n    <img src=".concat(this.imgURL, "/>\n    <h2>").concat(this.getFullName(), "</h2>\n    <blockquote>").concat(this.quote, "</blockquote>\n    <h3>Skills</h3>\n    <ul>").concat(this.getSkillsList(), "</ul>\n    </article>");
      return profileHTML;
    }
  }]);

  return Profile;
}();

var studentContainer = document.querySelector(".students-container");
var blaiseBuckland = new Profile("Blaise", "Buckland", "You can never have too many camels", ["HTML", "CSS", "JavaScript"], "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png");
studentContainer.innerHTML += blaiseBuckland.getProfileHTML;