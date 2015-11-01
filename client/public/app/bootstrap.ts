/// <reference path='../_references.ts' />
import {Component, bootstrap, View, ViewEncapsulation, FORM_DIRECTIVES, CORE_DIRECTIVES, provide } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, Route, Router, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';

import {FriendsListService} from './components/friends-list/friends-list-service';
import {FriendsListCmp} from './components/friends-list/friends-list-cmp';
import {AboutCmp} from './components/about/about-cmp';

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
])
class AppComponent {
    constructor() {
        console.log('AppComponent initialized');
    }
}

class AppRequestOptions extends BaseRequestOptions {
    
    constructor() {
        super();
        this.headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
        //this.headers.append('Mano', 'http://localhost:5000');
    }
}

const APP_PROVIDERS: Array<any> = [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(RequestOptions, { useClass: AppRequestOptions }),
    provide(LocationStrategy, { useClass: PathLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' })
];


bootstrap(AppComponent,[APP_PROVIDERS]).catch(err => console.error(err));