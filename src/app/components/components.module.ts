import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { PipesModule } from "../pipes/pipes.module";
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    declarations: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent
  ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      CommonModule,
      PipesModule
    ],
    exports: [
      UserDetailsComponent,
      FilterComponent,
      UsersListComponent
    ]
})
export class ComponentsModule { }
