let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} else if (runnerAge > 18 && registeredEarly){
  console.log(`9:30 starts. You're number is ${raceNumber}`);
} else if ( runnerAge > 18 && !registeredEarly){
  console.log(` 11am starts sir.`);
} else if ( runnerAge < 18 ) {
  console.log(`You're starting at 12:30pm. You're number is ${raceNumber}`);
} else{
  console.log("Go to the registration desk. :)");
}
