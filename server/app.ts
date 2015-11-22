/// <reference path='_references.ts' />
import * as express from 'express';
import {urlencoded, json} from 'body-parser';
import errorHandler = require('errorhandler');
import * as cors from 'cors';
import {join} from 'path';
import dogeFriendsController = require('./modules/doge-friends/controllers/doge-friends-controller');

var app = express();

// Configuration
app.set('port', 5000);
app.set('views', join( __dirname, '/views') ); // critical to use path.join on windows
app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(express.static(join(__dirname, '/../client')));
app.use(errorHandler());

// Routes
app.use('/api/doge-friends', dogeFriendsController);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

export var App = app;