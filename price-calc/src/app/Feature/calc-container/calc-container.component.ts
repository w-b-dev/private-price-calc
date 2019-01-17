import { Component, OnInit } from '@angular/core';
import { CalcStatusService } from '../../Core/calc-status.service';

@Component({
  selector: 'pcalc-calc-container',
  templateUrl: './calc-container.component.html',
  styleUrls: ['./calc-container.component.scss']
})
export class CalcContainerComponent implements OnInit {
  constructor(private StatusService: CalcStatusService) {}

  ngOnInit() {
    const tabOpen = this.StatusService.getOpenTab();
    const target = document.getElementsByTagName(tabOpen)[0];
    target.classList.remove('closed');
    target.classList.add('expanded');
  }
}
