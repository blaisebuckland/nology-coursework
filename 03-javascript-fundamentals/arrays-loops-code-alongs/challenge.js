stringArr = ["dIsco    ", "   ShOes "]

const cleanedArr = stringArr.maps((string) => {
    const cleanStr = string.trim().toLowerCase();
    return cleanStr;
  });

console.log(stringArr);
  // this takes each item in the array and puts it into a string, separated by a "+"

//  const joinedString = cleanedArr.join("+");

 // return joinedString;