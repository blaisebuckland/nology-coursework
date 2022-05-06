const students = ["Blaise", "Olivia", "Morrigan", "Matt"];

const listElement = document.querySelector("#student-list")
for (let index = 0; index < students.length; index++) {
    listElement.innerHTML += `<li>${students[index]}<li>`
}

const button = document.querySelector("#remove-button");
button.addEventListener("click", () => {
    students.pop();
   
})