import {NgModule} from "@angular/core";

import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./login/login.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {SharedModule} from "../../shared/shared.module";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {RegisterComponent} from "./register/register.component";
import {NzSelectModule} from "ng-zorro-antd/select";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {AuthComponent} from "./auth.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
        NzFormModule,
        NzInputModule,
        NzCheckboxModule,
        NzButtonModule,
        NzSelectModule,
        NzLayoutModule,
    ],
})
export class AuthModule {
}
