/// <reference path='../_references.ts' />
import {bootstrap, provide } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF, ROUTER_PRIMARY_COMPONENT, LocationStrategy, PathLocationStrategy, Route, Router, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';


import {AppCmp} from './components/app/app-cmp';


class AppRequestOptions extends BaseRequestOptions {
    
    constructor() {
        super();
        this.headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    }
}


const APP_PROVIDERS: Array<any> = [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(RequestOptions, { useClass: AppRequestOptions }),
    provide(LocationStrategy, { useClass: PathLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(ROUTER_PRIMARY_COMPONENT, {
        useValue: AppCmp
    }),
];


bootstrap(AppCmp, [APP_PROVIDERS]).catch(err => console.error(err));