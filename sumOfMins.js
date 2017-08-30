function sumTwoSmallestNumbers(numbers) {
let x = Math.min.apply(Math, numbers)
let tempArray  = numbers.filter(function(n) { return n != Math.min.apply( Math, numbers ) })
let y = Math.min.apply(Math, tempArray)
return x + y

}
