import { sandboxOf } from 'angular-playground';
import { PlaygroundDemoComponent } from './playgroundDemo.component';

export default sandboxOf(PlaygroundDemoComponent)
    .add('with simple text', {
        template: '<app-playground-demo>Hey playground!</app-playground-demo>'
    });
