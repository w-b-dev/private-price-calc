import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcContainerComponent } from './calc-container/calc-container.component';
import { CalcStatusComponent } from './calc-status/calc-status.component';
import { CalcStep1Component } from './calc-step1/calc-step1.component';
import { CalcStep2Component } from './calc-step2/calc-step2.component';
import { CalcStep3Component } from './calc-step3/calc-step3.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    CalcContainerComponent,
    CalcStatusComponent,
    CalcStep1Component,
    CalcStep2Component,
    CalcStep3Component,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
})
export class FeatureModule {
}
