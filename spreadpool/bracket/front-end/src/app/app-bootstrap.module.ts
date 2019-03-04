// ./src/app/app-bootstrap.module.ts
// This module is used to import 3rd party UI modules 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngx-bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule, CollapseModule, TabsModule]
})
export class AppBootstrapModule {}