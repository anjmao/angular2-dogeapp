import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

import {DogeFriendsService} from '../core/doge-friends-service';

@Component({
    selector: 'friend-form'
})
@View({
        templateUrl: 'app/components/friend-form/friend-form.html',
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendFormCmp {
    
    constructor(private routeParams: RouteParams, private dogeFriendsService: DogeFriendsService) {
        console.log(routeParams.get('a'));
        console.log('FriendFormCmp initialized');
    }

    errors: any[];
    formSaved: boolean = false;

    reputations: number[] = [1, 2, 3, 4, 5];

    formModel: App.IDogeFriend = {
        firstName: undefined
    };

    saveForm() {

        this.formSaved = false;

        this.dogeFriendsService.create(this.formModel)
            .map(res => res.json())
            .subscribe(result => {

                this.errors = result.errors;

                this.formSaved = !this.errors;
            });
    }
    
    get diagnostic() { return JSON.stringify(this.formModel); }

}
