import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'friend-form'
})
@View({
        templateUrl: 'app/components/friend-form/friend-form.html',
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendFormCmp {
    
    constructor(private routeParams: RouteParams) {
        console.log(routeParams.get('a'));
        console.log('FriendFormCmp initialized');
    }

    reputations: number[] = [1, 2, 3, 4, 5];

    formModel: App.IDogeFriend = {
        firstName: undefined
    };

    saveForm() {
        console.log('save form');
    }
    
    get diagnostic() { return JSON.stringify(this.formModel); }

}
