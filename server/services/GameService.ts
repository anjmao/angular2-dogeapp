// <reference path='../_references.ts' />
import modelTypes = require('../models/ModelTypes');
import modelRoot = require('../models/Root');
import sequalize = require('sequelize');
import BaseService = require('./BaseService');
import DbConnection = require('../core/db/DbConnection')
import Q = require('q');

var db = DbConnection.create();

var PlayerModel = modelRoot.Player;
var GameModel = modelRoot.Game;

export interface IGameService {
    getTopPlayersList(): sequalize.Promise;
    startGame(request: modelTypes.StartGameRequest): Q.Promise<modelTypes.StartGameResponse>;
    saveGame(request: modelTypes.SaveLevelDataRequest): Q.Promise<boolean>;
}

export class GameService extends BaseService implements IGameService {

    maxPossibleScore: number = 100000;

    getTopPlayersList(): sequalize.Promise {

        var query = 'select p.name, max(g.score) as "bestScore", p."fbPhotoUrl" from games as g '
                  + 'inner join players as p on p."idPlayer" = g."idPlayer" '
                  + 'group by p."idPlayer" '
                  + 'having max(g.score) > 0 '
                  + 'order by max(g.score) desc '
                  + 'limit 10';

        return db.query(query, { type: sequalize.QueryTypes.SELECT });
    }
    
    startGame(request: modelTypes.StartGameRequest): Q.Promise<modelTypes.StartGameResponse> {
        return Q.Promise<modelTypes.StartGameResponse>((resolve, reject) => {

            if (!request.idFbUser) {
                reject('idFbUser required');
            }

            PlayerModel.find({ where: { idFbUser: request.idFbUser } }).then((player) => {
                if (player != null) {

                    this.createNewGame(player.idPlayer).then((game) => {

                        this.getBestScore(player.idPlayer).then((bestScore) => {
                            resolve({
                                idGame: game.idGame,
                                bestScore: bestScore,
                                idPlayer: player.idPlayer
                            });
                        });
                        //.catch((error) => { reject(error); });

                    });
                    //.catch((error) => { reject(error); });
                }
                else {

                    var newPlayer: modelTypes.Player = {
                        idFbUser: request.idFbUser,
                        name: request.name,
                        fbPhotoUrl: request.fbPhotoUrl,
                        email: 't@gn.coms'
                    };

                    PlayerModel.create(newPlayer).then((player) => {

                        this.createNewGame(player.idPlayer).then((game) => {
                            resolve({
                                idGame: game.idGame,
                                bestScore: 0,
                                lifes: 5,
                                idPlayer: player.idPlayer
                            });
                        });

                    });
                    //.catch((error) => { reject(error); });

                }
            });
                //.catch((error) => { reject(error); });

        });
        
    }

    saveGame(request: modelTypes.SaveLevelDataRequest): Q.Promise<boolean> {
        return Q.Promise<boolean>((resolve, reject) => {

            if (request.score > this.maxPossibleScore) {
                reject('reached max possible score');
            }

            var idPlayer = request.idPlayer;

            GameModel.find({
                where: {
                    idGame: request.idGame,
                    idPlayer: idPlayer
                }
            }).then((game) => {
			
                //TODO: this is very very unsecure
                game.score = request.score;
                game.isComplete = true;

                game.save().then(() => {
                    resolve(true);
                }).catch((error) => { reject(error); });


            }).catch((error) => { reject(error); });
        });
    }

    private getBestScore(idPlayer: number): sequalize.PromiseT<number> {
        return GameModel.max<number>('score', { where: { 'idPlayer': idPlayer } });
    }

    private createNewGame(idPlayer: number): sequalize.PromiseT<modelTypes.GameInstance> {
        var newGame: modelTypes.Game = {
            idPlayer: idPlayer
        };
        return GameModel.create(newGame);
    }
    
    private createPlayer(player: modelTypes.Player): sequalize.PromiseT<modelTypes.PlayerInstance> {
        return PlayerModel.create(player);
    }
}
