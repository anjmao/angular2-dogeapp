import {Component, bootstrap, View, ViewEncapsulation, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';
import {RouteConfig, Route, ROUTER_DIRECTIVES } from 'angular2/router';

import {FriendsListCmp} from '../friends-list/friends-list-cmp';
import {FriendFormCmp} from '../friend-form/friend-form-cmp';
import {AboutCmp} from '../about/about-cmp';


@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/doge-app.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/', component: FriendsListCmp, as: 'FriendsList' }),
    new Route({ path: '/about', component: AboutCmp, as: 'About' }),
    new Route({ path: '/friend-form', component: FriendFormCmp, as: 'FriendFormCmp' })
])
export class AppCmp {
    constructor() {
        console.log('AppComponent initialized');
    }
}
