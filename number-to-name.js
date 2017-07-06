let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numWord(number) {
 let narr = number.toString().split('').reverse().join('');
 console.log('narr', narr)
 let res = [];
 res.unshift(ones[narr[0]]);
 console.log('unshifted',res)
 if(narr[1]){
   if(narr[1] == 1){
     res=[];
     res.unshift(teens[narr[0]]);
     console.log(res)
   }else{
     res.unshift(tens[narr[1]-1]);
      console.log(res)
   }
 }
 if(narr[1] && narr[2]){
   res.unshift(ones[narr[2]] + ' hundred');
 }
 return res.join(' ');
}

numWord(234); 
