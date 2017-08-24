function fiveReverse(str){
  let testArr = str.split(' ');
  let wordArr = [];

 testArr.forEach(function(word) {
    wordArr.push(word.split(''))
  });

  for(let i = 0; i < wordArr.length; i++) {
      if(wordArr[i].length > 4) {
      wordArr[i].reverse();
    }
  }

  let test = wordArr.map(word => {
    return word.join('');
  });


  return test.join(' ');

}

fiveReverse('hi there friend');
