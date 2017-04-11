/**
 * @author Iftikhar Ul Hassan
 * @date 4/10/17.
 */

const CCN_UTILS = require('./util');

module.exports = function () {

    var generatedRandomCnn;
    do {
        generatedRandomCnn = CCN_UTILS.generateRandomCnn('4', 16);
    } while (!CCN_UTILS.isValid(generatedRandomCnn));

    return generatedRandomCnn;

};