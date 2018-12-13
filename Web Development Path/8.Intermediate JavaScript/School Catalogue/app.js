class school {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents){
    if ( typeof newNumberOfStudents === 'number'){
      this._numberOfStudents = numberOfStudents;
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }

  quickFacts(){
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
  }

  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
  }
}

class PrimarySchool extends school{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends school{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high school', numberOfStudents)
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury.quickFacts());
console.log(PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);
