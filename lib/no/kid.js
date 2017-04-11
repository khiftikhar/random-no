/**
 * @author Iftikhar Ul Hassan
 * @date 4/10/17.
 */

const util = require('../util');

module.exports = function (length) {
    length = length || 21;

    var isValid;

    var kidNumber;

    do {
        kidNumber = util.generateRandomNumber(0, 9, length) + "";
        var controlDigit = kidNumber.charAt(kidNumber.length - 1);
        isValid = parseInt(controlDigit, 10) === util.mod11(kidNumber) || parseInt(controlDigit, 10) === util.luhnValue(kidNumber);
    } while (!isValid);

    return kidNumber;

};