// angular
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// libs
import { HttpTransferModule } from '@ngx-universal/state-transfer';
import { CacheModule } from '@ngx-cache/core';
import { ConfigLoader, ConfigModule, ConfigService } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { ConfigFsLoader } from '@ngx-config/fs-loader';
import { UniversalConfigLoader } from '@ngx-universal/config-loader';
import { MetaLoader, MetaModule, MetaStaticLoader } from '@ngx-meta/core';

// routes & components
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ChangeLanguageComponent } from './change-language.component';

// for AoT compilation
export function configFactory(platformId: any, http: Http): ConfigLoader {
  const serverLoader = new ConfigFsLoader('./public/assets/config.json');
  const browserLoader = new ConfigHttpLoader(http, './assets/config.json');

  return new UniversalConfigLoader(platformId, serverLoader, browserLoader);
}

export function metaFactory(config: ConfigService): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: config.getSettings('seo.pageTitlePositioning'),
    pageTitleSeparator: config.getSettings('seo.pageTitleSeparator'),
    applicationName: config.getSettings('system.applicationName'),
    applicationUrl: config.getSettings('system.applicationUrl'),
    defaults: {
      title: config.getSettings('seo.defaultPageTitle'),
      description: config.getSettings('seo.defaultMetaDescription'),
      generator: 'ng-seed',
      'og:site_name': config.getSettings('system.applicationName'),
      'og:type': 'website',
      'og:locale': config.getSettings('i18n.defaultLanguage.culture'),
      'og:locale:alternate': config.getSettings('i18n.availableLanguages')
          .map((language: any) => language.culture).toString()
    }
  });
}

@NgModule({
  imports: [
    BrowserModule,
    HttpTransferModule.forRoot(),
    RouterModule.forRoot(routes,  { initialNavigation: 'legacy_enabled' }),
    HttpModule,
    CacheModule.forRoot(),
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [PLATFORM_ID, Http]
    }),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory),
      deps: [ConfigService]
    })
  ],
  declarations: [
    AppComponent,
    ChangeLanguageComponent
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }
}
