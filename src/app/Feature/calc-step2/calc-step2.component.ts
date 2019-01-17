import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalcStatusService } from 'src/app/Core/calc-status.service';
import { expandTab } from 'src/app/Shared/utils';

@Component({
  selector: 'pcalc-calc-step2',
  templateUrl: './calc-step2.component.html',
  styleUrls: [ './calc-step2.component.scss' ],
})
export class CalcStep2Component implements OnInit {

  constructor(private StatusService: CalcStatusService) {}

  ngOnInit() {
  }

  expand(event) {
    expandTab(event, this.StatusService);
  }
}
