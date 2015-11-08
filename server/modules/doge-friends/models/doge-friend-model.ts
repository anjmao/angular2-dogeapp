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

    var names = ['Bailey', 'Lucy', 'Charlie', 'Rocky', 'Cooper', 'Sam', 'Zeus'],
        dogePhrases = ['Such Wow Angular2', 'Amaz app with Typescript', 'Much NodeJs', 'Such amaze Sequalize ORM', 'Such wow PostgreSQL'],
        randomName = () => {
            return names[Math.floor(Math.random() * names.length)];
        },
        randomPhrase = () => {
            return dogePhrases[Math.floor(Math.random() * dogePhrases.length)];
        };


    for (var i = 0; i < 100; i++) {
        
        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoriteDogePhrase: randomPhrase(),
            reputation: 5
        });

        model.create({
            firstName: randomName()+i,
            lastName: randomName()+i,
            favoriteDogePhrase: randomPhrase(),
            reputation: 4
        });
    }
    
});

export var Model = SequalizeModel;