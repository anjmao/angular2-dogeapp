import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'about'
})
@View({
    templateUrl: 'app/components/about/about.html'
})
export class AboutCmp {

    title: string = 'About page';

    description: string = `This application purpose is to show how to use Angular2 (DI, Routing, Components, Views),
                            Typescript, ExpressJs with Origin Request enabled and Sequalize ORM with PostgreeSQL`;

}
