import DbConnection = require('../../../core/db/DbConnection');
import Sequelize = require('sequelize');


var db = DbConnection.create();


export interface IDogeFriendInstance extends Sequelize.Instance<IDogeFriendInstance, App.IDogeFriend>, App.IDogeFriend { }
export interface IDogeFriendModel extends Sequelize.Model<IDogeFriendInstance, App.IDogeFriend> { }


var SequalizeModel = db.define<IDogeFriendInstance, App.IDogeFriend>('dogeFriend', {
    idDogeFriend: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30],
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 30],
        }
    },
    favoriteDogePhrase: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 200],
        }
    },
    reputation: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
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