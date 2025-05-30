/*
The Query String module provides a way of parsing the URL query string.
Query String Methods:

                                 or
querystring module in node js is a way to parse and construct URL query parameteres.
it is used to handle query string parameter that are part of url

Method	     Description
escape()	Returns an escaped querystring
parse() 	Parses the querystring and returns an object
stringify()	Stringifies an object, and returns a query string
unescape()	Returns an unescaped query string

*/
var querystring = require('querystring');
var q = querystring.parse('year=2017&month=february');
console.log(q.year);
console.log(q.month);