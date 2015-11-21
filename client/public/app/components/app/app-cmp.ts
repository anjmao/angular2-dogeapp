import {Component, bootstrap, View, ViewEncapsulation, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';
import {RouteConfig, Route, ROUTER_DIRECTIVES } from 'angular2/router';

import {FriendsListCmp} from '../friends-list/friends-list-cmp';
import {FriendFormCmp} from '../friend-form/friend-form-cmp';
import {AboutCmp} from '../about/about-cmp';
import {DogeFriendsService} from '../core/doge-friends-service';


@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/components/app/doge-app.html',
    encapsulation: ViewEncapsulation.None,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/', component: FriendsListCmp, as: 'FriendsList' }),
    new Route({ path: '/about', component: AboutCmp, as: 'About' }),
    new Route({ path: '/friend-form', component: FriendFormCmp, as: 'FriendFormCmp' })
])
export class AppCmp {
    constructor(private dogeFriendsService: DogeFriendsService) {

        console.log('AppComponent initialized');

        this.dogeFriendsService.formSavedEvent.toRx().subscribe(this.makeSound)
    }
    
    makeSound($event) {
        var mp3 = new Audio('app/components/app/sound.mp3');
        mp3.play();
    }
}
