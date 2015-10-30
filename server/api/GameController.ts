// <reference path='../_references.ts' />
import express = require('express');
import modelTypes = require('../models/ModelTypes');
import gs = require('../services/GameService');
import models = require('../models/Root');

import DbConnection = require('../core/db/DbConnection');
import sequelize = require('sequelize');

var router = express.Router();
var gameService = new gs.GameService();


router.get('/top-players', (req: express.Request, res: express.Response) => {

	gameService.getTopPlayersList().then((players) => {
		res.json(players);
	}).catch((error) => {
		res.send(error);
	});

});


router.post('/start-game', (req: express.Request, res: express.Response) => {
    var request = <modelTypes.StartGameRequest>req.body;
    gameService.startGame(request).then((result) => {
        req.session.idPlayer = result.idPlayer;
		res.json(result);
	}).catch((error) => {
		res.send(error);
	});

});

router.post('/save-game', (req: express.Request, res: express.Response) => {
    var request = <modelTypes.SaveLevelDataRequest>req.body;

    request.idPlayer = req.session.idPlayer;

	gameService.saveGame(request).then(() => {
        res.json({ ok: 'save-game', idPlayer: request.idPlayer  });
	}).catch((error) => {
		res.send(error);
	});
	
});



export = router;