import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {Router, RouteConfig, Route} from 'angular2/router';
import {DogeFriendsService} from '../core/doge-friends-service';

@Component({
    selector: 'friends-list'
})
@View({
    templateUrl: 'app/components/friends-list/friends-list.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendsListCmp {

    friendsList: App.IDogeFriend[] = [];

    constructor(private dogeFriendsService: DogeFriendsService, private router: Router) {
        console.log('FriendsListCmp initialized');
        this.loadFriends('');
    }

    onSearch($event) {
        this.loadFriends($event.target.value);
    }

    addNewFriend() {
        console.log('show add new friend form');
        this.router.navigate(['FriendFormCmp', { param: '1', a: 's' }]);
    }

    private loadFriends(searchValue?: string) {

        this.dogeFriendsService.getList(searchValue)
            .map(res => res.json())
            .subscribe(friendsList => this.friendsList = friendsList);
    }

}


