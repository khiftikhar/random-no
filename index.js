#!/usr/bin/env node
var program = require('commander');

var no_acc = require('./lib/no/kontonummer');
var orgNr = require('./lib/no/orgNr');
var no_kid = require('./lib/no/kid');
var no_ssn = require('./lib/no/ssn');

var ccn_visa = require('./lib/card/visa');
var ccn_mc = require('./lib/card/mc');
var ccn_amex = require('./lib/card/amex');

program
    .version('v0.0.1')
    .description("The utility provides random values, e.g. account numbers, ssn, organization numbers, kid, visa, mastercard etc")
;

//help
program
    .command('help')
    .description("The utility provides random values, e.g. account numbers, ssn, organization numbers etc")
;

program
    .command('ssn')
    .action(function (date) {
        console.info(no_ssn(date));
    })
    .description('Generate random Norwegian Social Security number.')
;

program
    .command('kontonummer')
    .action(function () {
        console.info(no_acc());
    })
    .description('Creates a newly generated account number with no assurance of uniqueness')
;

program
    .command('kort')
    .action(function (code) {
        if (code) {
            switch (code) {
                case 'visa':
                    console.info(ccn_visa());
                    break;
                case 'amex':
                    console.info(ccn_amex());
                    break;

                case 'mc':
                    console.info(ccn_mc());
                    break;

                default:
                    console.warn('Invalid / Unsupported credit card type provided, see help -h --help');
            }
        }
    })
    .description('Creates a random credit card number, Visa, Mastercard and American Express are supported e.g. $ randomjs kort visa')
;

program
    .command('orgnr')
    .action(function () {
        console.info(orgNr());
    })
    .description('Creates a random organization number')
;

program
    .command('kid')
    .action(function (length) {
        console.info(no_kid(parseInt(length)));
    })
    .description('Creates a random KID number, you can provide length as well e.g. $ randomjs kid 25')
;

program.parse(process.argv);
