const getSleepHours = day => {
  switch (day) {
      case "Monday":
      return 1;
      break;
    case "Tuesday":
    return 2;
    break;
    case "Wednesday":
    return 3;
    break;
    case "Thursday":
    return 4;
    break;
    case "Friday":
    return 5;
    break;
    case 'Saturday':
    return 6;
    break;
    case 'Sunday':
    return 7 ;
    break;
  }
}

const getActualSleepHours = () => {
  let total = getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
  return total;
}

const getIdealSleepHours = (ideal) => {
  let idealHours = ideal;
  return idealHours *= 7;
}

const calculateSleepDebt= (ideal) => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(ideal);
  let difference = actualSleepHours - idealSleepHours;
  if (difference > 0) {
      return `You're over ideal hours by ${difference} hours! Good job`;
  } else if (difference < 0){
     difference *= (-1);
     return `You need to sleep ${difference} more hours... Sleep more man...`;
  } else if (difference === 0){
     return "Great! You're exactly on the ideal hours! Keep it up!";
  }
}


console.log(calculateSleepDebt(8))
