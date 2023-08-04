function addCommas(number) {
    // Convert the number to a string
    let numStr = String(number);

    // Check if the number is negative and remove the '-' sign temporarily
    let isNegative = false;
    if (numStr[0] === '-') {
        isNegative = true;
        numStr = numStr.slice(1);
    }

    // Add commas to the number
    let formattedStr = '';
    let digitCount = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
        formattedStr = numStr[i] + formattedStr;
        digitCount++;
        if (digitCount === 3 && i !== 0) {
            formattedStr = ',' + formattedStr;
            digitCount = 0;
        }
    }

    // Add back the '-' sign if the number was negative
    if (isNegative) {
        formattedStr = '-' + formattedStr;
    }

    return formattedStr;
}

module.exports = addCommas;
