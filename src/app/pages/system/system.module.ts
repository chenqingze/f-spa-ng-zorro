import {NgModule} from "@angular/core";

import {SystemRoutingModule} from "./system-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [SharedModule, SystemRoutingModule],
})
export class SystemModule {
}
