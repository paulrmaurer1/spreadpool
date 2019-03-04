// ./src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {
  routes as childRoutes,
  AdminModule
} from './admin/admin.module';

import { UserResolver } from './core/user-resolver';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { LogoutComponent } from './logout/logout.component';
import { BracketsComponent } from './brackets/brackets.component';

import { IsAdminGuard } from './core/is-admin.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
    resolve: { loggedInUser: UserResolver },
    runGuardsAndResolvers: 'always' },
  { path: 'profile', 
    component: ProfileComponent,
    resolve: { loggedInUser: UserResolver } },
  { path: 'brackets/:id', component: BracketsComponent },
	{ path: 'logout', 
      component: LogoutComponent,
      resolve: {url: 'externalUrlRedirectResolver'},
      data: {externalUrl: '/logout/'}},
  { path: 'admin',
    canActivate: [IsAdminGuard],
    children: childRoutes
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
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