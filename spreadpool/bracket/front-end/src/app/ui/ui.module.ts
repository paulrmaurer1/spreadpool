import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app-routing.module';
import { AppBootstrapModule } from '../app-bootstrap.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppBootstrapModule,
    FontAwesomeModule,
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
