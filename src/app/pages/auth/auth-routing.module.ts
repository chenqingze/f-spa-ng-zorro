import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full",
    },
    {
        path: "",
        children: [
            {
                path: "login",
                component: LoginComponent,
            },
            {
                path: "register",
                component: RegisterComponent,
            },
            {
                path: "forgot-password",
                component: ForgotPasswordComponent,
            },
            {
                path: "reset-password",
                component: ResetPasswordComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
