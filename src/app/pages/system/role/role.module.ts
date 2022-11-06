import {NgModule} from "@angular/core";

import {RoleRoutingModule} from "./role-routing.module";
import {RoleComponent} from "./role.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    declarations: [RoleComponent],
    imports: [SharedModule, RoleRoutingModule],
})
export class RoleModule {
}
