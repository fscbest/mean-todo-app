var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
    res.send('\
    <!DOCType html>\
    <html>\
        <head>\
            <title>MEAN ToDo App</title>\
        </head>\
        <body>\
            <h1>Hello here</h1>\
        </body>\
    </html>\
    ');
});

app.listen(PORT, function(){
    console.log('Server is running on ' + PORT + ' port');
});