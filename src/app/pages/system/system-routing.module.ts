import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "tenant",
        title: '单位管理',
        loadChildren: () => import("./tenant/tenant.module").then((m) => m.TenantModule),
    },
    {
        path: "dept",
        title: '部门管理',
        loadChildren: () => import("./dept/dept.module").then((m) => m.DeptModule),
    },
    {
        path: 'position',
        title: '岗位管理',
        loadChildren: () => import('./position/position.module').then(m => m.PositionModule)
    },
    {
        path: "user",
        title: '用户管理',
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
    },
    {
        path: "role",
        title: '角色管理',
        loadChildren: () => import("./role/role.module").then((m) => m.RoleModule),
    },
    {
        path: "permission",
        title: '权限管理',
        loadChildren: () => import("./permission/permission.module").then((m) => m.PermissionModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule {
}
