var fs = require('fs');

fs.unlink('./file system module/fsdefination.txt',function(err,data) {
    if(!err) {
        console.log(data.toString());
    }
});