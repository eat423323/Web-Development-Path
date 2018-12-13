const team = {
  _players: [
    {firstName: 'Pablo',
     lastName:'Sanchez',
     age: '11'}
  ],
  _games: [
    {opponent: 'Broncos',
     teamPoints: 42,
     opponentPoints: 27}
  ],

  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player= {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  addGame(teamName, myPoints, opponentPoints){
    let game= {
      teamName: teamName,
      myPoints: myPoints,
      opponentPoints: opponentPoints,
    }
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Yankees', 5, 4);
team.addGame('Red Sox', 6, 2);
team.addGame("Astros", 1, 5);

console.log(team._players);
console.log(team._games);
