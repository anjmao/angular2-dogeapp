/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');

// setup middleware

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views'));

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'vash');


app.get('/', function (req, res) {
    res.render('index');
});


/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}