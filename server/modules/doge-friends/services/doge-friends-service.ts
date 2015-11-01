
import Sequelize = require('sequelize');
import DbConnection = require('../../../core/db/DbConnection');
import DogeFriendModel = require('../models/doge-friend-model');


class DogeFriendsService {

    getList(searchValue: string): Sequelize.PromiseT<DogeFriendModel.IDogeFriendInstance[]> {

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

}

export = DogeFriendsService;