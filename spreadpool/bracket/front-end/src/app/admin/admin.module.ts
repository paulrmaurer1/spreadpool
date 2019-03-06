import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { PickListModule } from 'primeng/picklist'; //Needed for Assign Entries page, assign-brackets.component

import { AssignBracketsComponent } from './assign-brackets/assign-brackets.component';
import { CreateBracketsComponent } from './create-brackets/create-brackets.component';
import { UpdateGamesComponent } from './update-games/update-games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';


export const routes: Routes = [
  { path: '', redirectTo: 'c-brackets', pathMatch: 'full' },
  { path: 'c-brackets', component: CreateBracketsComponent },
  { path: 'a-brackets/:id', component: AssignBracketsComponent },
  { path: 'u-games', component: UpdateGamesComponent },
];

@NgModule({
  declarations: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent,
  	GameDetailComponent
  ],
  exports: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PickListModule,
    AngularFontAwesomeModule
  ]

})
export class AdminModule { }
