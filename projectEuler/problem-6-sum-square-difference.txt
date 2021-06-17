function sumSquareDifference(n) {
  let numsArr = [];
  for (let i=1; i<=n; i++){
    numsArr.push(i);
  }
  let sumOfSquares = numsArr.reduce((sum, item)=> sum+item**2, 0);
  let squareOfSums = (numsArr.reduce((sum, item)=> sum+item, 0))**2;
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(10));