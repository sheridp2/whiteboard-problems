function stray(numbers){
  if(numbers[0] === numbers[1]) {
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] !== numbers[0]) {
         return numbers[i];
      }
    }
  }

  return numbers[0] === numbers[2] ? numbers[1] : numbers[0];
}
