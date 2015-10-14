var express = require('express');
var app = express();

var hasName = function(req, res, next) {
    if (req.param('name')) {
        next();
    } else {
        res.send('What is your name?');
    }
}

var hasSex = function(req, res, next) {
    if (req.param('sex')) {
        next();
    } else {
        res.send('What is your sex?');
    }
}

var sayHello = function(req, res, next) {
    
}

app.use('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);
console.log('Serer running at http://localhost:3000');

module.exports = app;
