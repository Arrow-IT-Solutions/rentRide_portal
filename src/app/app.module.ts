import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { DynamicDilogComponent } from './layout/component/dynamic-dilog/dynamic-dilog.component';
import { AdhostDirective } from './Core/directive/adhost.directive';
import { LocalService } from './shared/service/local.service';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Core/services/user.service';

import { LayoutService } from './layout/service/layout.service';
import { ContentLayoutAdminComponent } from './layout/content-layout-admin/content-layout-admin.component';
import { HeaderAdminComponent } from './layout/content-layout-admin/pages/header-admin/header-admin.component';
import { MainMenuAdminComponent } from './layout/content-layout-admin/pages/main-menu-admin/main-menu-admin.component';

@NgModule({
  declarations: [
     AppComponent,
    MainMenuComponent,
    HeaderComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    DynamicDilogComponent,
    AdhostDirective,
    ContentLayoutAdminComponent,
    HeaderAdminComponent,
    MainMenuAdminComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(
    private localService: LocalService,
    public translate: TranslateService,
    public userService: UserService,
    public layoutService: LayoutService,
  ) {
    //this.localService.GetStorge();
    this.translate.setDefaultLang('en');

    this.translate.langs = ['en', 'ar'];
    // this.translate.currentLang = layoutService.config.lang ?? 'en';
    this.translate.use(layoutService.config.lang ?? 'en');
    // console.log('translate.currentLang : ', this.translate.currentLang);
    // console.log('translate.getLangs() : ', this.translate.getLangs());
  }

  async ngOnInit() {}
}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
