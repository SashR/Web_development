function palindrome(str) {
    let newArr = ((str.split("")).filter(item => /[0-9a-z]/i.test(item)));
    let revArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        revArr.push(newArr[i])
    }
    let newStr = newArr.join("").toLowerCase();
    let revStr = revArr.join("").toLowerCase();
    return (revStr === newStr);

}
  //.join("")).toLowerCase()

  //console.log(palindrome("_eye"));