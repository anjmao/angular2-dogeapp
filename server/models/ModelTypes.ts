/// <reference path='../_references.ts' />
import Sequelize = require('sequelize');

//request response models
export interface StartGameRequest {
	idFbUser: string;
	name?: string;
	fbPhotoUrl?: string;
	idPlayer: number;
}


export interface StartGameResponse {
    idGame: number;
    bestScore?: number;
    idPlayer: number;
    lifes?: number;
}
export interface SaveLevelDataRequest {
	idGame: number;
	idFbUser: string;
	idPlayer: number;
	level: number;
	score: number;
}


//models

export interface SequalizeModel {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Player extends SequalizeModel {
	idPlayer?: number;
	idFbUser: string;
	email?: string;
	name?: string;
    fbPhotoUrl?: string;
    lifes?: number;
}

export interface Game extends SequalizeModel {
	idGame?: number;
	idPlayer: number;
	score?: number;
	isComplete?: boolean;
}

export interface PlayerInstance extends Sequelize.Instance<PlayerInstance, Player>, Player { }
export interface PlayerModel extends Sequelize.Model<PlayerInstance, Player> { }

export interface GameInstance extends Sequelize.Instance<GameInstance, Game>, Game { }
export interface GameModel extends Sequelize.Model<GameInstance, Game> { }



export var Players: PlayerModel;
export var Games: GameModel;
