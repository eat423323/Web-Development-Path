const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'){
    return userInput;
  } else if (userInput === 'scissors'){
    return userInput;
  } else if (userInput === 'paper'){
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput;
  } else {
    return 'error';
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 2) {
      return 'rock';
      } else if ( randomNumber === 1) {
        return 'paper';
      } else if ( randomNumber === 0) {
        return 'scissors';
      }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tied...";
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return "computer won!";
    } else {
      return "user won!";
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return "computer won!";
    } else {
      return "user won!";
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return "computer won!";
    } else {
      return "user won!";
    }
  } else if (userChoice === 'bomb') {
    return "USER WINS NO MATTER WHAT!!!"
  } else {
    return "Call out Rock, Paper, or Scissors man...";
  }
}


const playGame = (userchoice) => {
  userChoice = getUserChoice(userchoice);
  computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('paper');
