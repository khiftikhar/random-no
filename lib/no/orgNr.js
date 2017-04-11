/**
 * @author Iftikhar Ul Hassan
 * @date 4/10/17.
 */

const util = require('../util');

module.exports = function () {

    var isValid;

    var orgNumber;
    do {
        orgNumber = util.generateRandomNumber(0, 9, 11);
        isValid = parseInt(orgNumber.charAt(orgNumber.length - 1), 10) === util.mod11(orgNumber)
    } while (!isValid);

    return orgNumber;
};