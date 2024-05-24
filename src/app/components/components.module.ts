import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angula-material/angula-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
      UserDetailsComponent
  ],
    imports: [
      AngularMaterialModule
    ],
    exports: [
      UserDetailsComponent
    ]
})
export class ComponentsModule { }
