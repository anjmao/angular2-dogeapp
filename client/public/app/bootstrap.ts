/// <reference path='../_references.ts' />

import {Component, bootstrap, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {DymmyService} from './dummy-service';

@Component({
    selector: 'my-app'
})
@View({
        templateUrl: 'app/doge-app.html',
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class AppComponent {

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

bootstrap(AppComponent, [DymmyService]);