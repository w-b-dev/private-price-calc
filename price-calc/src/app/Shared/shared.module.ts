import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
