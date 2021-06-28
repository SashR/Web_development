function checkCashRegister(price, cash, cid) {
    var change = {
        status: "",
        change: []
    };
    let amounts = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let numTokens = [];
    for (let i = 0; i < cid.length; i++) {
        numTokens.push(Math.round(cid[i][1] / amounts[i]))
    }

    let changeVal = cash - price;
    let totalCID = cid.reduce((sum, item) => sum + item[1], 0);

    if (changeVal > totalCID) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
        return change;
    }
    else if (changeVal == totalCID) {
        change.status = "CLOSED";
        change.change = cid;
        return change;
    }
    else {
        change.status = "OPEN";
        change.change = [];
    }
    let dummyChange = changeVal;
    let counter = -1;
    for (let j = 7; j >= 0; j--) {
        if ((dummyChange >= amounts[j]) && (numTokens[j] > 0)) {
            change.change.push([cid[j][0], 0]);
            counter++;
        }
        while ((dummyChange >= amounts[j]) && (numTokens[j] > 0)) {

            dummyChange -= amounts[j];
            numTokens[j] -= 1;
            change.change[counter][1] += amounts[j];
            dummyChange = Math.round(dummyChange * 100) / 100;
        }
    }
    if (dummyChange != 0) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
    }

    //return change;
    //[totalCID, changeVal, amounts]
    return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))