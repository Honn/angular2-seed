// angular
import { Component, OnInit } from '@angular/core';

// libs
import { ConfigService } from '@ngx-config/core';
import { MetaService } from '@ngx-meta/core';

// external styles
import '../assets/sass/base.scss';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title: string;

    constructor(private readonly config: ConfigService,
                private readonly meta: MetaService) {
    }

    ngOnInit(): void {
        this.title = 'ng-seed (universal) works!';
    }
}
