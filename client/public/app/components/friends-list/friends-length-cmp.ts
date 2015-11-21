import {Input, Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'friends-length'
})
    @View({
        templateUrl: 'app/components/friends-list/friends-length.html',
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
    })
export class FriendsLengthCmp {
    @Input() length: number;

    constructor() {
        console.log('FriendsLengthCmp');
    }
}