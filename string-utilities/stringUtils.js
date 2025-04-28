/*
04/28/25
Modules & Package Management - 2 Practice: String Utilities
stringUtils.js = the custom module

Define and export the following functions:
capitalize(str): Converts the first letter of a string to uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a string and returns true or false.
Design the module functions to handle edge cases, such as empty
strings or undefined inputs.
*/

const fs = require('fs');

function capitalize(str) {

}

function reverse(str) {
    // string reversal from recursive practice; reusable code
    if (string.length >= 1) {
        return string[string.length - 1] + reverseString(string.slice(0, -1));
        // [string.length - 1] for the last character of the string
        // (string.slice(0, -1)) --> .slice(start, end) ; negative counts from the end (-1 is the last character)
    }
    return string;
}

function contains(str, substr) {
    if (fs.existsSync('example.txt')) {
        console.log("true");
    } else {
        console.log("false");
    }
}

module.exports = { capitalize, reverse, contains };
