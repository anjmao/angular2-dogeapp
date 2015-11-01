import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class FriendsListService {

    base: string = 'http://localhost:5000';

    constructor(private http: Http) {
        
    }

    getList(searchValue: string): any {
        
        var params: ngHttp.RequestOptionsArgs = {
            method: 'GET'
        };

        return this.http.get(`${this.base}/api/doge-friends/list?searchValue=${searchValue}`, params);
    }
}