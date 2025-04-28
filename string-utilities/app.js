/*
04/28/25
Modules & Package Management - 2 Practice: String Utilities
app.js = main file for testing

Import the stringUtils.js module into app.js.
○ Test each function with different string inputs and log the results to the console.
*/

const fs = require('fs');
const stringUtils = require('./stringUtils');

console.log(`capitalize "javascript": ${stringUtils.capitalize("javascript")}`);
console.log(`reverse "javascript": ${stringUtils.reverse("javascript")}`);
console.log(`contains "javascript" && "pandas": ${stringUtils.contains("javascript", "pandas")}`);
console.log(`contains "javascript" && "script": ${stringUtils.contains("javascript", "script")}`);
