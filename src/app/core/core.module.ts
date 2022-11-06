import {LOCALE_ID, NgModule, Optional, SkipSelf} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule,} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {LayoutComponent} from "./components/layout/layout.component";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NavComponent} from "./components/nav/nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {XhrInterceptor} from "./interceptors/xhr.interceptor";
import {en_US, NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";
import {NgForOf, NgIf, registerLocaleData} from "@angular/common";
import en from "@angular/common/locales/en";
import zh from "@angular/common/locales/zh";
import {XsrfInterceptor} from "./interceptors/xsrf.interceptor";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {TabsComponent} from './components/tabs/tabs.component';

const interceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptor, multi: true},
    {
        provide: NZ_I18N,
        useFactory: (localId: string) => {
            switch (localId) {
                /** 与 angular.json i18n/locales 配置一致 **/
                case "en":
                    return en_US;
                case "zh":
                    return zh_CN;
                default:
                    return zh_CN;
            }
        },
        deps: [LOCALE_ID],
    },
];

registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
    declarations: [
        LayoutComponent,
        NavComponent,
        HeaderComponent,
        FooterComponent,
        TabsComponent,
    ],
    imports: [
        // angular
        HttpClientModule,
        HttpClientXsrfModule,
        RouterModule,
        // the third party
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzToolTipModule,
        NzTabsModule,
        NgForOf,
        NgIf,
    ],
    providers: [...interceptors],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        throwIfAlreadyLoaded(parentModule, "CoreModule");
    }
}
