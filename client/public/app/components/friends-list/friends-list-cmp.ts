import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {Router, RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {DogeFriendsService} from '../core/doge-friends-service';
import {FriendRowCmp} from './friend-row-cmp';

@Component({
    selector: 'friends-list'
})
@View({
    templateUrl: 'app/components/friends-list/friends-list.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES, FriendRowCmp]
})
export class FriendsListCmp {

    friendsList: App.IDogeFriend[] = [];

    constructor(private dogeFriendsService: DogeFriendsService, private router: Router) {
        console.log('FriendsListCmp initialized');
        this.loadFriends();
    }

    onSearch($event) {
        this.loadFriends($event.target.value);
    }

    addNewFriend() {
        console.log('show add new friend form');
        //TODO: for now angular 2 router works very bad :)
        this.router.navigate(['FriendFormCmp', { param: '1', a: 's' }]);
    }

    deleteDogeFriend(friend: App.IDogeFriend) {
        if (confirm('Are you sure?')) {
            this.dogeFriendsService.delete(friend.idDogeFriend).subscribe(() => {
                this.loadFriends();
            });
        }
    }

    private loadFriends(searchValue?: string) {

        if (!searchValue) searchValue = '';

        this.dogeFriendsService.getList(searchValue)
            .map(res => res.json())
            .subscribe(friendsList => this.friendsList = friendsList);
    }

}


