/*
The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:
*/

const { URL } = require('url');

const myUrl = new URL('https://example.com:8080/path/page?name=Mansoor&age=25#top');

console.log(myUrl.hostname);   // 'example.com'
console.log(myUrl.port);       // '8080'
console.log(myUrl.pathname);   // '/path/page'
console.log(myUrl.search);     // '?name=Mansoor&age=25'
console.log(myUrl.searchParams.get('name')); // 'Mansoor'
