import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/bootloader';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

export function main(): any {
    initializePlayground('ap-root');
    platformBrowserDynamic().bootstrapModule(PlaygroundModule);
}

// HMR support
if (module['hot'])
    module['hot'].accept();

bootloader(main);
