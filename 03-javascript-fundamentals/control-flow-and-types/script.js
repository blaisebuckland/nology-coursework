function handleCalculateGrade(event) {
    const grade = event.target.value.toUpperCase();
    
    /* to stop the calculator creating and "undefined" alert 
    if the input is empty */
    if (!grade) {
        return;
    } 

    let percentage;
    switch (grade) {
        case ("A"):
            percentage = "90-100%";
            break;
        case ("B"):
            percentage = "75-90%";
            break;
        case ("C"):
            percentage = "60-75%";
            break;
        case ("D"):
            percentage = "50-60%";
            break;   
        case ("E"):
            percentage = "40-50%";
            break;  
        case ("F"):
            percentage = "0-50%";
            break;  

    }
    alert ("Your score was " + percentage);
}

function handlePositiveNegative(event) {
    const number = event.target.value;

    if (number >0) {
        alert ("This is a positive number")
    } else if (number<0) {
        alert ("This is a negative number")
    }
}

function handleLargestNumber(event) {
    const firstNumber = 34;
    const secondNumber = 65;
    const thirdNumber = 7;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        return firstNumber;
    } else if (secondNumber > firstNumber && firstNumber > thirdNumber) {
        return secondNumber;
    } else {
        return thirdNumber;
    }
}

function calculateDaysUntilWeekend(event) {

    switch (new Date().getDay()) {
        case (0):
            console.log ("It's the weekend!")
            break;
        case (1):
            console.log ("4 days left until the weekend!")
            break;
        case (2):
            console.log ("3 days left until the weekend!")
            break;
        case (3):
            console.log ("2 days left until the weekend!")
            break;
        case (4):
            console.log ("1 days left until the weekend!")
            break;
        case (5):
            console.log ("0 days left until the weekend!")
            break;
        case (6):
            console.log ("It's the weekend!")
            break;
    }
}