import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class DogeFriendsService {

    base: string = 'http://localhost:5000';

    constructor(private http: Http) {

    }
    
    //TODO: Figure out which type return get. Using any is not good solution.
    getList(searchValue: string): any{

        var params: ngHttp.RequestOptionsArgs = {
            method: 'GET'
        };

        return this.http.get(`${this.base}/api/doge-friends/list?searchValue=${searchValue}`, params);
    }

    create(request: App.IDogeFriend): any {
        
        return this.http.post(`${this.base}/api/doge-friends/create`, JSON.stringify(request));
    }
}