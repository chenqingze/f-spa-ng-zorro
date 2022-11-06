import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./core/components/layout/layout.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "dashboard"},
    {
        path: "",
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                title: '仪表盘',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: "system",
                loadChildren: () => import("./pages/system/system.module").then((m) => m.SystemModule),
            },
        ],
    },
    {
        path: "auth",
        component: AuthComponent,
        loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule),
    },

    // Fallback when no prior routes is matched
    {path: "**", redirectTo: "/auth/login", pathMatch: "full"},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
