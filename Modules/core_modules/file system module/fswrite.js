var fs = require('fs');

fs.writeFile('./writtingtoit.js','Hello, Im good , HOW ARE YOU ',function(err){
    if(!err) {
        fs.readFile('./writtingtoit.js',function(err, data){
            if(!err) {
                console.log(data.toString());
            }
        });
    }
});