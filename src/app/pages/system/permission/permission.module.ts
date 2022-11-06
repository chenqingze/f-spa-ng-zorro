import {NgModule} from "@angular/core";

import {PermissionRoutingModule} from "./permission-routing.module";
import {IndexComponent} from "./index/index.component";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from './detail/detail.component';
import {SharedModule} from "../../../shared/shared.module";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";

@NgModule({
    declarations: [IndexComponent, EditComponent, AddComponent, DetailComponent],
    imports: [
        SharedModule, PermissionRoutingModule, NzPopconfirmModule, NzInputModule, NzTableModule, NzButtonModule, NzFormModule, NzInputNumberModule, NzTreeSelectModule, NzSelectModule, NzRadioModule
    ],
})
export class PermissionModule {
}
