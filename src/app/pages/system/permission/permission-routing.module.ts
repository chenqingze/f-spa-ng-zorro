import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
    {path: "", redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', title: '权限管理', component: IndexComponent,},
    // {path: '/detail/:id', component: DetailComponent},
    // {path: '/edit/:id', component: EditComponent},
    // {path: '/add', component: AddComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermissionRoutingModule {
}
