import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RosterComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileEditComponent,
    LogoutComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
