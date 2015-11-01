import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'about'
})
@View({
    templateUrl: 'app/components/about/about.html'
})
export class About {

    title: string = 'About page';

    description: string = `Doge uses two-word phrases in which the first word is almost always one of five modifiers ("so", "such", "many", "much", and "very"),
        and the departure from correct English is to use the modifier with a word that it cannot properly modify.[3] For example,
        "Much respect. So noble." uses the doge modifiers but is not "proper" doge because the modifiers are used in a formally
        correct fashion; the doge version would be "Much noble, so respect."[3] In addition to these phrases, a doge utterance
        often ends with a single word, most often "wow" but with "amaze" and "excite" also being used.`

}
