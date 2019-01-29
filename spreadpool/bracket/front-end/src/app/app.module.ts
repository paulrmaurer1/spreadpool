import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';

import { appStoreProviders } from './app.store';
import { AppBootstrapModule } from './app-bootstrap.module';
import { UiModule } from './ui/ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { BracketsComponent } from './brackets/brackets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RosterComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileEditComponent,
    LogoutComponent,
    BracketsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    UiModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
