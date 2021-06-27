function telephoneCheck(str) {
    //remove () or dashs
    if (/[a-z]/i.test(str)) {
        return false;
    }
    if ((/[^0-9()-\s]/.test(str))) {
        return false;
    }

    if (((str.match(/\d/g)).join("")).length < 10) {
        return false;
    }

    if (((str.match(/\d/g)).join("")).length > 11) {
        return false;
    }

    if (((str.match(/\d/g)).join("")).length == 11) {
        if (!(/^1/.test(str))) {
            return false;
        }
    }

    if ((str.split("-")).length > 3) {
        return false;
    }

    if (((str.split("(")).length + (str.split(")")).length) == 3) {
        return false;
    }

    if (((str.split(""))[str.length - 1] == ")")) {
        return false;
    }

    // check for only nums

    // check if 10 or 11 digits
    // if 11 digits, musts start with 1


    return true;
}

console.log(telephoneCheck("555-555-5555"));