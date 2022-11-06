import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";
import {registerLocaleData} from "@angular/common";
import zh from "@angular/common/locales/zh";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

registerLocaleData(zh);

@NgModule({
    declarations: [AppComponent],
    imports: [
        // angular
        BrowserModule,
        BrowserAnimationsModule,
        // core & shared
        CoreModule,
        SharedModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
