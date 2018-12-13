// this is kelvin(can't change) //
const kelvin = 0;
/* we're converting between kelvin and celsius :) */
let celsius = kelvin - 273;
// formula of conversion between celsius and fahrenheit //
let fahrenheit = celsius *(9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(newton);
