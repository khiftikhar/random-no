const util = require('../util');
const DATE_FORMAT = "DDMMYYYY";

function generate(date, min, max) {

    var day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
    var month = date.getMonth() < 10 ? "0" + date.getMonth() : "" + date.getMonth();
    if (month === '00') {
        month = '01';
    }

    var year = date.getYear() < 10 ? "0" + date.getYear() : "" + date.getYear();

    var dateString = day + month + year;

    var x1 = dateString.substring(0, 1);
    var x2 = dateString.substring(1, 2);
    var x3 = dateString.substring(2, 3);
    var x4 = dateString.substring(3, 4);
    var x5 = dateString.substring(4, 5);
    var x6 = dateString.substring(5, 6);


    for (var i = max; i > min; i--) {

        var index = util.getOneRandomNumber(min, max) + "";

        var i1 = index.substring(0, 1);
        var i2 = index.substring(1, 2);
        var i3 = index.substring(2, 3);

        var c1 = 11 - ((3 * x1 + 7 * x2 + 6 * x3 + 1 * x4 + 8 * x5 + 9 * x6 + 4 * i1 + 5 * i2 + 2 * i3) % 11);
        var c2 = 11 - ((5 * x1 + 4 * x2 + 3 * x3 + 2 * x4 + 7 * x5 + 6 * x6 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * c1) % 11);

        if (c1 >= 10 || c2 >= 10) {
            continue;
        }
        return "" + dateString + i1 + i2 + i3 + c1 + c2;
    }
}
module.exports = function (date) {

    if (util.isString(date)) {
        try {
            date = util.toDate(date, DATE_FORMAT);
        } catch (e) {
            console.error('Invalid date provided (%s), use format DDMMYYYY e.g. 14061978', date);
            return;
        }
    } else {
        date = util.generateRandomDate();
    }

    var year = date.getYear();
    var min = 100, max = 499;

    if (year >= 1855 && year <= 1899) {
        min = 500;
        max = 749;
    } else if (year >= 1900 && year <= 1999) {
        min = 100;
        max = 499;
    } else if (year >= 2000 && year <= 2054) {
        min = 500;
        max = 999;
    }
    return generate(date, min, max);
};