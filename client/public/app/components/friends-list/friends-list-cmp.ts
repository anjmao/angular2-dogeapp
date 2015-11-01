import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, DatePipe} from 'angular2/angular2';
import {FriendsListService} from './friends-list-service';

@Component({
    selector: 'friends-list',
    providers: [FriendsListService]
})
@View({
        templateUrl: 'app/components/friends-list/friends-list.html',
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
        pipes: [DatePipe]
})
export class FriendsListCmp{

    friendsList: App.IDogeFriend[];

    constructor(private friendsListService: FriendsListService) {
        console.log('FriendsListCmp initialized');

        this.loadFriends('');

    }

    onSearch($event) {
        this.loadFriends($event.target.value);
    }

    private loadFriends(searchValue?: string) {

        this.friendsListService.getList(searchValue)
         // Call map on the response observable to get the parsed people object
         .map(res => res.json())
         // Subscribe to the observable to get the parsed people object and attach it to the  component
         .subscribe(friendsList => this.friendsList = friendsList);
    }
    
}


