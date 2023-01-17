import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appStoreProviders } from './app.store';
import { AppBootstrapModule } from './app-bootstrap.module';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';

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
import { DeleteModalComponent } from './admin/create-brackets/delete-bracket-modal.component';
import { ReassignModalComponent } from './admin/create-brackets/reassign-bracket-modal.component';
import { ResetModalComponent } from './admin/create-brackets/reset-bracket-modal.component';
import { StandingsComponent } from './standings/standings.component';
import { StandingsNavComponent } from './standings-nav/standings-nav.component';
import { BracketTabComponent } from './bracket-tab/bracket-tab.component';
import { RosterTextboxComponent } from './roster-textbox/roster-textbox.component';
import { SendOrigModalComponent } from './admin/send-emails/send-orig-modal.component';
import { SendGamesModalComponent } from './admin/send-emails/send-games-modal.component';
import { PartialProfileFormModalComponent } from './profile-form-modal/partial-profile-form-modal.component';
import { AdminProfileFormModalComponent } from './profile-form-modal/admin-profile-form-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
        ReassignModalComponent,
        ResetModalComponent,
        StandingsComponent,
        StandingsNavComponent,
        BracketTabComponent,
        RosterTextboxComponent,
        SendOrigModalComponent,
        SendGamesModalComponent,
        PartialProfileFormModalComponent,
        AdminProfileFormModalComponent,
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
        FontAwesomeModule,
    ],
    providers: [appStoreProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
