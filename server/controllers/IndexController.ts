/// <reference path='../_references.ts' />

import express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response) => {

   res.render('index');
});

router.get('/about', (req: express.Request, res: express.Response) => {
   res.render('about');
});

router.post('/fb-game', (req: express.Request, res: express.Response) => {
   res.render('index');
});

router.get('/game-play-frame2', (req: express.Request, res: express.Response) => {
   var model = {
      score: req.query.iAle || 0,
      level: req.query.iIbe || 1,
   }
   res.render('game-play-frame2', model);
});

router.get('/game-intro-frame2', (req: express.Request, res: express.Response) => {
   res.render('game-intro-frame2');
});

export = router;