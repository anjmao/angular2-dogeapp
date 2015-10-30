import {Injectable} from 'angular2/angular2'

export interface Hero {
    name: string;
}

@Injectable()
export class DymmyService {

    heroes: Hero[];
    constructor() {
        this.heroes = [{name: 'dummy1'}];
    }
    getHeroes() {
        return this.heroes;
    }
}