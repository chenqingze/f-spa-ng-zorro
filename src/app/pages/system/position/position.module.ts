import {NgModule} from '@angular/core';

import {PositionRoutingModule} from './position-routing.module';
import {PositionComponent} from './position.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
    declarations: [
        PositionComponent
    ],
    imports: [
        SharedModule,
        PositionRoutingModule
    ]
})
export class PositionModule {
}
