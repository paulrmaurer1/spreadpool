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
import { TeamDetailsComponent } from './team-details/team-details.component';
import { DeleteModalComponent } from './admin/create-brackets/create-brackets.component';
import { TeamNextupComponent } from './team-nextup/team-nextup.component';
import { StandingsComponent } from './standings/standings.component';
import { StandingsNavComponent } from './standings-nav/standings-nav.component';
import { BracketTabComponent } from './bracket-tab/bracket-tab.component';
import { RosterTextboxComponent } from './roster-textbox/roster-textbox.component';


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
    TeamDetailsComponent,
    DeleteModalComponent,
    TeamNextupComponent,
    StandingsComponent,
    StandingsNavComponent,
    BracketTabComponent,
    RosterTextboxComponent,
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
