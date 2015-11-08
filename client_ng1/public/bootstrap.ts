namespace app {
    'use strict'

    var module = angular.module('app',[]);

    class HomeCtrl {

        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) {
            this.loadFriends();
        }
        
        friendsList: App.IDogeFriend = [];

        onSearch($event) {
            this.loadFriends($event.target.value);
        }
        
        private loadFriends(searchValue?: string) {

            if (!searchValue) searchValue = '';

            var base = 'http://localhost:5000';

            this.$http.get<App.IDogeFriend[]>(`${base}/api/doge-friends/list?searchValue=${searchValue}`).then((result) => {
                this.friendsList = result.data;
            });
        }
    }

    module.controller('homeCtrl', HomeCtrl);
}