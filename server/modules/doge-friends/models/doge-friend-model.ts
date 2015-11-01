import DbConnection = require('../../../core/db/DbConnection');
import Sequelize = require('sequelize');


var db = DbConnection.create();


export interface IDogeFriendInstance extends Sequelize.Instance<IDogeFriendInstance, App.IDogeFriend>, App.IDogeFriend { }
export interface IDogeFriendModel extends Sequelize.Model<IDogeFriendInstance, App.IDogeFriend> { }


var SequalizeModel = db.define<IDogeFriendInstance, App.IDogeFriend>('dogeFriend', {
    idDogeFriend: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    favoriteDogePhrase: { type: Sequelize.STRING },
    reputation: { type: Sequelize.INTEGER }
});

SequalizeModel.sync({ force: true }).then((model) => {

    model.create({
        firstName: 'Micky',
        lastName: 'Mouse',
        favoriteDogePhrase: 'Such Wowo',
        reputation: 5
    });

    model.create({
        firstName: 'Tom',
        lastName: 'Butty',
        favoriteDogePhrase: 'Amazing',
        reputation: 4
    });

    console.log('DogeFriendModel created');
});

export var Model = SequalizeModel;