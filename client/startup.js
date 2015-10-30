/**
 * Module dependencies.
 */

var express = require('express');


// setup middleware

var app = express();
app.use(express.static(__dirname + '/public'));
app.use('/',express.static(__dirname + '/public/app'));


/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}