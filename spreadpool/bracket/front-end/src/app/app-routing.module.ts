import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserResolver } from './core/user-resolver';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { LogoutComponent } from './logout/logout.component';
import { BaseComponent } from './base/base.component';
import { BracketsComponent } from './brackets/brackets.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '',
 	// 	component: BaseComponent, 
 	// 	resolve: { loggedInUser: UserResolver },
 	// 	children: [
 	// 		{ path: 'home', component: HomeComponent },
 	// 		{ path: 'profile', component: ProfileComponent },
 	// 	] 
 	// },
  { path: 'home',
    component: HomeComponent,
    resolve: { loggedInUser: UserResolver } },
  { path: 'profile', component: ProfileComponent },
  { path: 'brackets', component: BracketsComponent },
	{ path: 'logout', 
      component: LogoutComponent,
      resolve: {url: 'externalUrlRedirectResolver'},
      data: {externalUrl: '/logout/'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  	{ // to be able to reference an external url within Routes
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      { window.location.href = (route.data as any).externalUrl; }
    },
    UserResolver,
  ],
})

export class AppRoutingModule { }