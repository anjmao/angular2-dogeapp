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

    one(idDogeFriend: number): any {

        var params: ngHttp.RequestOptionsArgs = {
            method: 'GET'
        };

        return this.http.get(`${this.base}/api/doge-friends/one?idDogeFriend=${idDogeFriend}`, params);
    }

    saveDogeFriend(request: App.IDogeFriend): any {

        var action;
        if (request.idDogeFriend) {
            return this.update(request)
        } else {
            return this.create(request);
        }

    }

    create(request: App.IDogeFriend): any {
        
        return this.http.post(`${this.base}/api/doge-friends/create`, JSON.stringify(request));
    }

    update(request: App.IDogeFriend): any {

        return this.http.put(`${this.base}/api/doge-friends/update`, JSON.stringify(request));
    }

    delete(idDogeFriend: number): any {

        return this.http.delete(`${this.base}/api/doge-friends/delete?idDogeFriend=${idDogeFriend}`);
    }
}