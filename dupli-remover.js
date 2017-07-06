let objects =[{"name":"Bob", "dob":"1/1/1980"},{"name":"Bob", "dob":"1/1/1980"},{"name":"Kevin", "dob":"1/1/1981"}, {"name":"Bob", "dob":"1/1/1980"}, {"name":"Bob", "dob":"1/1/1986"}]


let thing =function(array){
for(let i=0; i<array.length; i++){
  for(let j=1; j<array.length; j++){
    if((i.name && i.dob) === (j.name && j.dob)){
      array.splice(j, 1)
    }
  }
  return array
  }
}
 thing(objects)
