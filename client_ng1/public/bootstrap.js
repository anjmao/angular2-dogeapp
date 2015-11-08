var app;
(function (app) {
    'use strict';
    var module = angular.module('app', []);
    var HomeCtrl = (function () {
        function HomeCtrl($http) {
            this.$http = $http;
            this.friendsList = [];
            this.loadFriends();
        }
        HomeCtrl.prototype.onSearch = function ($event) {
            this.loadFriends($event.target.value);
        };
        HomeCtrl.prototype.loadFriends = function (searchValue) {
            var _this = this;
            if (!searchValue)
                searchValue = '';
            var base = 'http://localhost:5000';
            this.$http.get(base + "/api/doge-friends/list?searchValue=" + searchValue).then(function (result) {
                _this.friendsList = result.data;
            });
        };
        HomeCtrl.$inject = ['$http'];
        return HomeCtrl;
    })();
    module.controller('homeCtrl', HomeCtrl);
})(app || (app = {}));
//# sourceMappingURL=bootstrap.js.map