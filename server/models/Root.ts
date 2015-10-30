import modelTypes = require('./ModelTypes');
import playerModel = require('./game/PlayerModel');
import gameModel = require('./game/GameModel');
import DbConnection = require('../core/db/DbConnection');

var force = true;

playerModel.sync({force: force}).then(() => {
	gameModel.sync({force: force});
});

export var Player: modelTypes.PlayerModel = playerModel;
export var Game: modelTypes.GameModel = gameModel;