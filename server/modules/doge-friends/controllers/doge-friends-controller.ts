import express = require('express');

import DogeFriendsService = require('../services/doge-friends-service');

var router = express.Router();


router.get('/list', (req: express.Request, res: express.Response) => {

    var service = new DogeFriendsService();

    service.getList(req.query.searchValue).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    })
    
});

export = router;