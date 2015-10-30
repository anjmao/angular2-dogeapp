// <reference path='../_references.ts' />
import express = require('express');
import modelTypes = require('../models/ModelTypes');
import gs = require('../services/GameService');
import models = require('../models/Root');

import DbConnection = require('../core/db/DbConnection');
import sequelize = require('sequelize');

var router = express.Router();
var gameService = new gs.GameService();


router.get('/session', (req: express.Request, res: express.Response) => {
    res.json(req.session);
});

router.get('/session-add', (req: express.Request, res: express.Response) => {
    req.session.views++;
    res.json(req.session);
});


router.get('/error-test', (req: express.Request, res: express.Response) => {

    //gameService.getData().then((result) => {
    //    res.json(result);
    //}).catch((error) => { res.send(error); });
    //works fine, here I get my thrown error

});

router.get('/pg-connect', (req: express.Request, res: express.Response) => {
    //var client = new pg.Client({
    //    user: "bcckrzizbplzua",
    //    password: "-C-a2oBbFsx6NymDyN4lPmWLWH",
    //    database: "darpfao7u8hb52",
    //    port: 5432,
    //    host: "ec2-54-197-230-210.compute-1.amazonaws.com",
    //    ssl: true
    //});
    //client.connect();


    //var query = client.query("select * from players");
    //query.on('row', function (row) {
    //    console.log(row.name);
    //});
    //query.on('end', client.end.bind(client)); //disconnect client manually

    res.send('tipo ok');

});



export = router;