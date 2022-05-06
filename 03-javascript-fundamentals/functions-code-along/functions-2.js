// Personal Profile
// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguements.

const getDescription = (numberOfChildren, partnerName, location, jobTitle) => {
    const description = `I am a ${jobTitle} living in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    console.log(description)
}

getDescription(1, "Wanda", "The Burrow", "figure skater");
getDescription(5, "no one", "Monaco", "dentist");
getDescription("no", "Saint Nick", "The North Pole", "gift tag expert")

// Lifetime Supply of Snickers
// Write a function named calculateSupply that:
// Takes 2 arguments: age, amount per day.
// Calculates the amount consumed for rest of your life (based on a constant max age).
// Outputs the result to the console like so: "You will need X to last you until the ripe old age of Y"
// Call the function 3 times with different values.
// Bonus: accpet floating point values for amount per day, and round the result to a round number.

const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 100;
    const amountSnickersNeeded = (100-currentAge)*365*amountPerDay;
    console.log(`You will need ${amountSnickersNeeded} snickers bars to last you until the ripe old age of 100.`)
}

calculateSupply(26,3);
calculateSupply(28,1);
calculateSupply(0,3);

// Celcius to Farenheit
 const calculateTempInFarenheit = (tempCelcius) => {
     const tempFarenheit = (tempCelcius*9/5) + 32;
     console.log(`The temperature in Celcius is ${tempCelcius}, that's ${tempFarenheit}.`);
 }

 calculateTempInFarenheit(15);
 calculateTempInFarenheit(20);

// Dog Years to Human Years
const calculateDogAgeHumanYears = (dogAge) => {
    const firstYear = 15;
    const secondDogYear = 9;
    const laterDogYear = 5;
    const dogAgeDogYears = firstYear + secondDogYear + laterDogYear*(dogAge-2);
    console.log(`Your dog is ${dogAge} human years old, that's ${dogAgeDogYears} in dog years.`)
}

calculateDogAgeHumanYears(7);
calculateDogAgeHumanYears(14);
