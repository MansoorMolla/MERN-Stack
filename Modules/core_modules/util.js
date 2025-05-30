/*
the util module in node js provides a collection of utility functions that can be used for debugging 
, formatting and other other purposes. it includes functions like 
util.format()
util.inspect()
util.promisify() and more
*/

const util = require('util');

const name = 'Mansoor';
const age = 22;

const message = util.format('My Name Is %s &  My Age Is %d',name , age);
console.log(message);