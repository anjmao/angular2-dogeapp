import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'friend-row',
    inputs: [
        'id: row-id'
    ]
})
    @View({
        template: '<span>{{id}}<span>'
    })
export class FriendRowCmp {
    id: number;
}