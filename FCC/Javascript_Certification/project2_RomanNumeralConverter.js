function convertToRoman(num) {
    let romanNums = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
        "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "M", "MM", "MMM"];

    let numArray = ((num.toString()).split("")).map(item => parseInt(item));
    let output = [];
    for (let i = 0; i < numArray.length; i++) {
        if (!(numArray[i] == 0)) {
            let temp = numArray.length - i - 1;
            if (temp == 0) {
                output.push(romanNums[numArray[i] - 1]);
            }
            else if (temp == 1) {
                output.push(romanNums[numArray[i] + 8])
            }
            else if (temp == 2) {
                output.push(romanNums[numArray[i] + 17])
            }
            else if (temp == 3) {
                output.push(romanNums[numArray[i] + 26])
            }
        }
    }
    return output.join("");
}

console.log(convertToRoman(3999));