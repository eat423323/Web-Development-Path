// this is my age //
const myAge = 26;
// changeable variable of early year //
let earlyYears = 2;
earlyYears *= 10.5;

// we already accounted for the early two years, hence taking away 2 from my age. //
let laterYears = myAge - 2;

laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;

//toLowerCase method returns my object in the front with all lowercase letters. //
const myName = 'Jack'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
