import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class FriendsListService {

    base: string = 'http://localhost:5000';

    constructor(private http: Http) {
        
    }

    getList(searchValue: string): any {


        //$httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.withCredentials = true;
        //delete $httpProvider.defaults.headers.common["X-Requested-With"];
        //$httpProvider.defaults.headers.common["Accept"] = "application/json";
        //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('useXDomain', 'true');
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        var params: ngHttp.RequestOptionsArgs = {
            headers: headers,
            method: 'GET'
        };

        return this.http.get(`${this.base}/api/doge-friends/list?searchValue=${searchValue}`, params);
    }
}