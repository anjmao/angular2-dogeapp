import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, ViewEncapsulation} from 'angular2/angular2';
import {Router, RouteConfig, Route} from 'angular2/router';
import {FriendsListService} from './friends-list-service';
import {FriendFormCmp} from '../friend-form/friend-form-cmp';

@Component({
    selector: 'friends-list',
    providers: [FriendsListService]
})
@View({
    templateUrl: 'app/components/friends-list/friends-list.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendsListCmp {

    friendsList: App.IDogeFriend[] = [];

    constructor(private friendsListService: FriendsListService, private router: Router) {
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

        this.friendsListService.getList(searchValue)
        // Call map on the response observable to get the parsed people object
            .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the  component
            .subscribe(friendsList => this.friendsList = friendsList);
    }

}


