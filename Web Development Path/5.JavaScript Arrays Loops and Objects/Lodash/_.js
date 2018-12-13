const _ = {
  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if ( !end ){
      end = start;
      start = 0;
    };
    if ( start > end ){
      let temp = end;
      end = start;
      start = temp;
    };
    const isInRange = ( start <= number && number <= end);
    return isInRange;
  },

  words(string){
    const words = string.split(' ');
    return words;
  },

  pad(string, length){
    if ( length <= string.length){
      return string;
    };
    startPaddingLength = Math.floor(( length - string.length ) / 2);
    endPaddingLength = length - string.length - startPaddingLength;
    paddingString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddingString;
  },

  has(object, key){
    let hasValue = (object.key !== undefined);
    return hasValue;
  },


  invert(object){
    let invertedObject ={};
    for (let key in object) {
      let originalValue = object.key;
      invertedObject.originalValue = key;
    };
    return invertedObject;
  },

  findKey(object, predicate){
    for (let key in object){
      let value = object.key;
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true ){
        return key;
      }
    };
    return undefined;
  },

  drop(array, n){
    if (!n){
      n = 1;
    };
    let droppedArray = array.slice(n);
    return droppedArray;
  },

  dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index)=>{
      !predicate(element);
      !predicate(index);
      !predicate(array);
    });
    let droppedArray = this.drop(dropNumber);
    return droppedArray;
  },

  chunk(array, size){
    if (!size){
      size = 1;
    };
    let arrayChunks = [];
    for (i = 0; i < size; i++){
      let arrayChunk = array.slice(array[i], array[i+size]);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;
