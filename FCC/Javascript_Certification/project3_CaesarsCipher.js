function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strArr = str.split("");
    let alphArr = alphabet.split("");
    let output = [];
    for (let i = 0; i < strArr.length; i++) {
        //output.push(alphArr[(alphArr.indexOf(strArr[i])+13)%26])
        if (alphArr.indexOf(strArr[i]) === -1) {
            output.push(str[i]);
        }
        else {
            output.push(alphArr[(alphArr.indexOf(strArr[i]) + 13) % 26])
        }

    }
    //  return (str.split(" ")).join("");
    return output.join("");
}

rot13("SERR PBQR PNZC");