import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './Shared/authentication/authentication.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
    /*One of the following must be provided: component, redirectTo, children or loadChildren*/
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: 'calculator',
    loadChildren: './Feature/feature.module#FeatureModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
