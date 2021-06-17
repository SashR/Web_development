function factors(n) {
  let facts = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      facts.push(i);
    }
  }
  return facts;
}
console.log(factors(20));

function checkPrime(n) {
  return factors(n).length === 2;
}
console.log(checkPrime(6));

function nthPrime(n) {
  let primeArr = [2, 3, 5, 7];
  let i = 3;
  while (primeArr.length < n) {
    if (primeArr.every((item) => i % item !== 0)) {
      primeArr.push(i);
    }
    i++;
  }
  return primeArr[primeArr.length - 1];
}

console.log(nthPrime(10001));
