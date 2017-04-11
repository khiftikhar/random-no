module.exports = {
    /**
     * Returns a random number between min and max range
     * @param min
     * @param max
     * @returns {*}
     */
    getOneRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    /**
     *
     * @param min
     * @param max
     * @param range
     * @returns {string}
     */
    generateRandomNumber: function (min, max, range) {
        var number = "";
        for (var i = 0; i < range; i++) {
            number += this.getOneRandomNumber(min, max);
        }
        return number;

    },

    /**
     *
     * @param start valid  {Date) if not provided, it will be 01/01/1900
     * @param end valid {Date) if not provided, it will be <code>Date.now()</code>
     * @returns {Date} returns a random date of type {Date}
     */
    generateRandomDate: function (start, end) {
        start = start || new Date(1900, 1, 1);
        end = end || Date.now();
        return new Date(+start + Math.random() * (end - start));
    },

    /**
     * Un-format or trim all the spaces in a string
     * @param stringToTrim
     * @returns {*|XML|void|string}
     */
    trim: function (stringToTrim) {
        return stringToTrim.replace(/^\s+|\s+$/g, "");
    },

    mod11: function (input) {
        var controlNumber = 2,
            sumForMod = 0,
            i;

        for (i = input.length - 2; i >= 0; --i) {
            sumForMod += input.charAt(i) * controlNumber;
            if (++controlNumber > 7)
                controlNumber = 2;
        }
        var result = (11 - sumForMod % 11);

        return result === 11 ? 0 : result;
    },

    luhnValue: function (number) {
        var sum = 0, dbl = 0, i;
        for (i = number.length - 2; i >= 0; i -= 2) {
            dbl = (parseInt(number.charAt(i), 10) * 2).toString();
            sum += parseInt(dbl.charAt(0), 10) + parseInt(dbl.charAt(1) || 0, 10);
        }
        for (i = number.length - 3; i >= 0; i -= 2) {
            sum += parseInt(number.charAt(i), 10);
        }
        sum = sum.toString();
        return 10 - parseInt(sum.charAt(sum.length - 1), 10);
    },
    
    isValidString : function (obj) {
        return obj !== null && typeof obj === 'string' && obj.length > 0;
    }
}
;