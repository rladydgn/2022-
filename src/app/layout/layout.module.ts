import { NgModule } from "@angular/core";
import { NbLayoutModule, NbSelectModule } from "@nebular/theme";
import { NbIconModule } from "@nebular/theme";
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { typeComponent } from "./type.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const COMPONENT = [
    // typeComponent
]

@NgModule({
    // declarations: [...COMPONENT],
    imports: [
        NbLayoutModule,
        NbIconModule,
        NbEvaIconsModule,
        NbSelectModule,
        RouterModule,
        CommonModule
    ],
    // exports: [...COMPONENT],
  })
  export class LayoutModule { }
  