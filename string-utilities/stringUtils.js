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
    str = String(str); //make sure its really a string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    // string reversal from recursive practice; reusable code
    if (str.length >= 1) {
        return str[str.length - 1] + reverse(str.slice(0, -1));
        // [string.length - 1] for the last character of the string
        // (string.slice(0, -1)) --> .slice(start, end) ; negative counts from the end (-1 is the last character)
    }
    return str;
}

function contains(str, substr) {
    str = String(str);
    substr = String(substr);
    if (str && substr) {
        console.log("true, there is a substring");
    } else {
        console.log("false, no substring");
    }
    return str.includes(substr);
}

module.exports = { capitalize, reverse, contains };
