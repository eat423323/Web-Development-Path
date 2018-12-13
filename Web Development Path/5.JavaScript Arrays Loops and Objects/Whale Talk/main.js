let input = "A whale of a deal!";
const vowels=['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for ( let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    input.toLowerCase();
    if ( input[i] === vowels[j] && input[i] === 'e'){
      resultArray.push("EE");
    } else if ( input[i] === vowels[j] && input[i] === 'u'){
      resultArray.push("UU");
    } else if (input[i] === vowels[j]) {
      resultArray.push(vowels[j].toUpperCase());
    }
  }
}

console.log(resultArray.join(''));
