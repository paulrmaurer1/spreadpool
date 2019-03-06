import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appStoreProviders } from './app.store';
import { AppBootstrapModule } from './app-bootstrap.module';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LogoutComponent } from './logout/logout.component';
import { BracketsComponent } from './brackets/brackets.component';
import { ProfileFormModalComponent } from './profile-form-modal/profile-form-modal.component';
import { BracketDetailComponent } from './bracket-detail/bracket-detail.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { BracketGameComponent } from './bracket-game/bracket-game.component';
import { BracketffDetailComponent } from './bracketff-detail/bracketff-detail.component';
import { DeleteModalComponent } from './admin/create-brackets/create-brackets.component';
import { TeamNextupComponent } from './team-nextup/team-nextup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RosterComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    LogoutComponent,
    BracketsComponent,
    ProfileFormModalComponent,
    BracketDetailComponent,
    TeamDetailsComponent,
    BracketGameComponent,
    BracketffDetailComponent,
    DeleteModalComponent,
    TeamNextupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    UiModule,
    AdminModule,
    AngularFontAwesomeModule,
  ],
  providers: [ appStoreProviders ],
  bootstrap: [ AppComponent ],
  entryComponents: [ ProfileFormModalComponent, DeleteModalComponent ]
})
export class AppModule { }
