import express = require('express');

import DogeFriendsService = require('../services/doge-friends-service');

var router = express.Router();
var service = new DogeFriendsService();

router.get('/list', (req: express.Request, res: express.Response) => {
    
    service.getList(req.query.searchValue).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
    
});

router.get('/one', (req: express.Request, res: express.Response) => {

    var idDogeFriend = <number>req.query.idDogeFriend;
    
    service.get(idDogeFriend).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

router.post('/create', (req: express.Request, res: express.Response) => {
    
    var request = <App.IDogeFriend>req.body;
    
    service.create(request).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

router.put('/update', (req: express.Request, res: express.Response) => {
    
    var request = <App.IDogeFriend>req.body;

    service.update(request).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});

router.delete('/delete', (req: express.Request, res: express.Response) => {
    
    var idDogeFriend = <number>req.body.idDogeFriend;

    service.delete(idDogeFriend).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });

});


export = router;