import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';

import {DogeFriendsService} from '../core/doge-friends-service';

@Component({
    selector: 'friend-form'
})
@View({
    templateUrl: 'app/components/friend-form/friend-form.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendFormCmp {

    constructor(private routeParams: RouteParams, private router: Router, private dogeFriendsService: DogeFriendsService) {
        console.log(routeParams.params);
        console.log('FriendFormCmp initialized');
        this.init();
    }
    
    errors: any[];
    formSaved: boolean = false;
    reputations: number[] = [1, 2, 3, 4, 5];
    formModel: App.IDogeFriend = {
        firstName: undefined
    };


    private init() {

        var idDogeFriend = this.routeParams.get('idDogeFriend');

        if (idDogeFriend) {

            this.dogeFriendsService.one(parseInt(idDogeFriend))
                .map(res => res.json())
                .subscribe(formModel => {
                    this.formModel = formModel;
                });
        }
    }

    saveForm() {

        this.formSaved = false;

        this.dogeFriendsService.saveDogeFriend(this.formModel)
            .map(res => res.json())
            .subscribe(result => {
                this.errors = result.errors;
                this.formSaved = !this.errors;

                if (this.formSaved) {
                    this.fireEvent();
                }

            });
    }

    fireEvent() {
        this.dogeFriendsService.formSavedEvent.next('yeee');
    }

    get diagnostic() { return JSON.stringify(this.formModel); }


}
