import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service'; // Service that will interact with Django jwt to authenticate user via token
import { PlayerService } from './player.service'; // Service to retrieve Django backend users api

@NgModule({
    imports: [  ],
    providers: [
    	PlayerService,
    	UserService,
    ]
})
export class CoreModule { }