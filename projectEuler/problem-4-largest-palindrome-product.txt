function generateArrayNNos(n){
  let output = [];
  for(let i=1; i<10**n; i++){
    output.push(i);
    // if(i%(10**n/10) === 0){
    //   output.push([]);
    // }
    // output[Math.ceil(i/(10**n/10))].push(i);
  }
  return output;
}
//console.log(generateArrayNNos(2))

function palindromeCheck(n){
  let str = n.toString();
  let strRev = "";
  for(let i=str.length-1; i>=0; i--){
    strRev += str[i];
  }
  return strRev === str;
}
//console.log(palindromeCheck(906608));

function largestPalindromeProduct(n) {
  let a1 = generateArrayNNos(n);
  let a2 = generateArrayNNos(n);
  let outputArr = [];
  for (let i=a1.length-1; i>=0; i--){
//    console.log(a1[i]);
    for (let j=a2.length-1; j>=0; j--){
//      console.log(a1[i]*[j]);
      if (palindromeCheck(a1[i]*a2[j])){
        outputArr.push(a1[i]*a2[j]);
      }
    }
  }

  return Math.max(...outputArr);
}
console.log(largestPalindromeProduct(3));


//console.log(generateArrayNNos(3))
//largestPalindromeProduct(3);