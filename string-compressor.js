string =('aAbbbbbbbC')


function wordNum(string){
temp =[]
count = 0
  for(let i =0; i < string.length; i++){

    if(string[i] !== string[i+1]){
      temp.push(string[i])
      temp.push(count+1)
      count = 0

    } else {
      count ++
    }

  }
    return temp.join('')
}
wordNum(string)
