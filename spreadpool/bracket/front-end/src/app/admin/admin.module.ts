import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { PickListModule } from 'primeng/picklist'; //Used on Assign Entries page, assign-brackets.component
import { CalendarModule } from 'primeng/calendar'; //Used on Update Game page, game-detail.component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Needed by CalendarModule

import { AssignBracketsComponent } from './assign-brackets/assign-brackets.component';
import { CreateBracketsComponent } from './create-brackets/create-brackets.component';
import { UpdateGamesComponent } from './update-games/update-games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { SendEmailsComponent } from './send-emails/send-emails.component';
import { EditRosterComponent } from './edit-roster/edit-roster.component';
import { EditRosterTextboxComponent } from './edit-roster/edit-roster-textbox/edit-roster-textbox.component';


export const routes: Routes = [
  { path: '', redirectTo: 'c-brackets', pathMatch: 'full' },
  { path: 'c-brackets', component: CreateBracketsComponent },
  { path: 'a-brackets/:id', component: AssignBracketsComponent },
  { path: 'u-games', component: UpdateGamesComponent },
  { path: 's-emails', component: SendEmailsComponent },
  { path: 'e-roster', component: EditRosterComponent },
];

@NgModule({
  declarations: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent,
  	GameDetailComponent,
  	SendEmailsComponent,
    EditRosterComponent,
    EditRosterTextboxComponent,
  ],
  exports: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent,
    SendEmailsComponent,
    EditRosterComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PickListModule,
    FontAwesomeModule,
    RouterModule,
    CalendarModule,
    BrowserAnimationsModule,
  ]

})
export class AdminModule { }
