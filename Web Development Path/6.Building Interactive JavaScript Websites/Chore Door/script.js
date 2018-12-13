window.onload = function (){
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start');



let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let currentlyPlaying = true;

function playDoor(door){
  numClosedDoors --;
  if (numClosedDoors === 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver();
  }
};
function gameOver(status){
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
  } else {
  startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};

const isBot = (door) =>{
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const isClicked = (door)=>{
    if (door.src === closedDoorPath){
      return false;
    } else{
      return true;
    };
  };


const randomChoreDoorGenerator = () =>{
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  } else {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
}

door1.onclick = ()=> {
  if (!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(door1);
  };
}

door2.onclick = () =>{
  if (!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(door2);
  };
};

door3.onclick = () =>{
  if (!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(door3);
  };
};

startButton.onclick =() =>{
  if (currentlyPlaying === false){
    startRound();
  };
}

const startRound =() =>{
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startRound();
}
