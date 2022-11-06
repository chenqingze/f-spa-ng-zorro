import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        // angular
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // 3rd
        NzModalModule
        // TranslateModule,
        // custom
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [],
        };
    }
}
