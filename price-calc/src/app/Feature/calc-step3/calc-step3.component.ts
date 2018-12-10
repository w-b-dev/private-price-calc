import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalcStatusService } from 'src/app/Core/calc-status.service';
import { expandTab } from 'src/app/Shared/utils';

@Component({
  selector: 'pcalc-calc-step3',
  templateUrl: './calc-step3.component.html',
  styleUrls: ['./calc-step3.component.scss']
})
export class CalcStep3Component implements OnInit {
  constructor(private StatusService: CalcStatusService) {}

  ngOnInit() {}

  expand(event) {
    expandTab(event, this.StatusService);
  }
}
