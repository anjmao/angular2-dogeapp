/// <reference path='../_references.ts' />
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, bootstrap, View, ViewEncapsulation, FORM_DIRECTIVES, CORE_DIRECTIVES, provide } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy, Route, Router, APP_BASE_HREF} from 'angular2/router';

import {DymmyService} from './dummy-service';
import {FriendsList} from './components/friends-list/friends-list';
import {About} from './components/about/about';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/doge-app.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/', component: FriendsList, as: 'FriendsList' }),
    new Route({ path: '/about', component: About, as: 'About' }),
])
class AppComponent {
    constructor() {
        var a = 5;
    }
}

bootstrap(AppComponent,
    [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, { useClass: PathLocationStrategy }),
        provide(APP_BASE_HREF, { useValue: '/' })
    ]);