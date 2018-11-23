import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcContainerComponent } from './Feature/calc-container/calc-container.component';
import { CalcStatusComponent } from './Feature/calc-status/calc-status.component';
import { CalcStep1Component } from './Feature/calc-step1/calc-step1.component';
import { CalcStep2Component } from './Feature/calc-step2/calc-step2.component';
import { CalcStep3Component } from './Feature/calc-step3/calc-step3.component';

@NgModule({
  declarations: [
    CalcContainerComponent,
    CalcStatusComponent,
    CalcStep1Component,
    CalcStep2Component,
    CalcStep3Component,
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
