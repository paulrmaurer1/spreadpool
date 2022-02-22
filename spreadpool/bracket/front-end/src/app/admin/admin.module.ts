import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { PickListModule } from 'primeng/picklist'; //Used on Assign Entries page, assign-brackets.component
import { CalendarModule } from 'primeng/calendar'; //Used on Update Game page, game-detail.component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Needed by CalendarModule

import { AssignBracketsComponent } from './assign-brackets/assign-brackets.component';
import { CreateBracketsComponent } from './create-brackets/create-brackets.component';
import { UpdateGamesComponent } from './update-games/update-games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { SendEmailsComponent } from './send-emails/send-emails.component';


export const routes: Routes = [
  { path: '', redirectTo: 'c-brackets', pathMatch: 'full' },
  { path: 'c-brackets', component: CreateBracketsComponent },
  { path: 'a-brackets/:id', component: AssignBracketsComponent },
  { path: 'u-games', component: UpdateGamesComponent },
  { path: 's-emails', component: SendEmailsComponent },
];

@NgModule({
  declarations: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent,
  	GameDetailComponent,
  	SendEmailsComponent,
  ],
  exports: [
  	AssignBracketsComponent,
  	CreateBracketsComponent,
  	UpdateGamesComponent,
    SendEmailsComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PickListModule,
    AngularFontAwesomeModule,
    RouterModule,
    CalendarModule,
    BrowserAnimationsModule,
  ]

})
export class AdminModule { }
