/**
 * @author Iftikhar Ul Hassan
 * @date 4/10/17.
 */

const util = require('../../lib/util');

module.exports = {

    isValid: function (ccn) {
        var length = ccn.length;
        var total = 0;
        for (var i = 0; i < length; i++) {
            var num = parseFloat(ccn.charAt(i));
            var numToAdd;

            if (i % 2 == 1) {
                numToAdd = num;
            } else {
                var double = num * 2;
                if (double >= 10)
                    double = double - 9;
                numToAdd = double;
            }

            total += numToAdd;
        }
        return (total % 10 == 0);
    },

    generateRandomCnn: function (startNumbers, size) {
        var numbersToAdd = size - startNumbers.length;
        var ccn = startNumbers + "";
        for (var i = 0; i < numbersToAdd; i++) {
            ccn += Math.floor(Math.random() * 10);
        }
        return ccn;
    }
};