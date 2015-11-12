var express = require('express');


// setup middleware
var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/public/app'));


//catch all routes and return index.html
app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Type', 'text/html').sendfile(__dirname + '/public/index.html');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3001);
    console.log('Express started on port 3001');
}