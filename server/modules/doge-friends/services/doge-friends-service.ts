
import Sequelize = require('sequelize');
import DbConnection = require('../../../core/db/DbConnection');
import DogeFriendModel = require('../models/doge-friend-model');


class DogeFriendsService {

    getList(searchValue: string): Promise<DogeFriendModel.IDogeFriendInstance[]> {

        var findOptions: Sequelize.FindOptions = {
            order: [
                'reputation'
            ]
        };

        if (searchValue) {
            findOptions.where = {
                $or: [
                    { firstName: { $iLike: `%${searchValue}%` } },
                    { lastName: { $iLike: `%${searchValue}%` } },
                    { favoriteDogePhrase: { $iLike: `%${searchValue}%` } },
                ]
            }
        }
        
        return DogeFriendModel.Model.findAll(findOptions);
    }

    create(request: App.IDogeFriend): Promise<DogeFriendModel.IDogeFriendInstance> {
        return DogeFriendModel.Model.create(request);
    }

    update(request: App.IDogeFriend): Promise<DogeFriendModel.IDogeFriendInstance> {

        return DogeFriendModel.Model.findById(request.idDogeFriend).then((dogeFriendInstance) => {

            dogeFriendInstance.firstName = request.firstName;
            dogeFriendInstance.lastName = request.lastName;
            dogeFriendInstance.reputation = request.reputation;

            return dogeFriendInstance.save();
        });
    };

    delete(idDogeFriend) {

        return DogeFriendModel.Model.findById(idDogeFriend).then((dogeFriendInstance) => {

            return dogeFriendInstance.destroy();

        });
    }

}

export = DogeFriendsService;