import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcContainerComponent } from './calc-container/calc-container.component';

const routes: Routes = [
  {
    path: '',
    component: CalcContainerComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class FeatureRoutingModule {
}
