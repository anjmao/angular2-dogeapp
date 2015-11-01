import types = require('../ModelTypes');
import DbConnection = require('../../core/db/DbConnection')
import sequelize = require('sequelize');
import Game = require('./GameModel');

var db = DbConnection.create();


var Player = db.define<types.PlayerInstance, types.Player>('player', {
	 idPlayer: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	 idFbUser: { 
		 type: sequelize.STRING,
		 validate: {
			 len: [5,50]        
		 }
	 },
	 name: sequelize.STRING,
	 fbPhotoUrl: sequelize.STRING,
     email: sequelize.STRING,
     lifes: sequelize.INTEGER
});

Player.hasMany(Game, { foreignKey: 'idPlayer' });

export = Player;