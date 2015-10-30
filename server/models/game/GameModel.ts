import types = require('../ModelTypes');
import models = require('../Root');
import DbConnection = require('../../core/db/DbConnection');
import sequelize = require('sequelize');
import Player = require('./PlayerModel');

var db = DbConnection.create();


var Game = db.define<types.GameInstance, types.Game>('game', {
	 idGame: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	 score: { type: sequelize.INTEGER },
	 isComplete: { type: sequelize.BOOLEAN }
	 //idPlayer: PlayerModelt.ts
});

export = Game;