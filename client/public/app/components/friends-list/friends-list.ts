import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'friends-list'
})
@View({
    templateUrl: 'app/components/friends-list/friends-list.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FriendsList{

    public title = 'Search result';
    public heroes = HEROES;
    public selectedHero: Hero;

    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}

class Hero {
    id: number;
    name: string;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
