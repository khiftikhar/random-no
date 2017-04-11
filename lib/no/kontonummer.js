var util = require('../util');

var randomAccountNumber = function () {

    var isNumberValid;
    var accountNumber;
    do {
        accountNumber = util.generateRandomNumber(0, 9, 11);
        isNumberValid = parseInt(accountNumber.charAt(accountNumber.length - 1), 10) === util.mod11(accountNumber);
    } while (!isNumberValid);

    return accountNumber;
};

module.exports = randomAccountNumber;
