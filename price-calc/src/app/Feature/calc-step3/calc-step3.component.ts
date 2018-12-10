import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalcStatusService } from 'src/app/Core/calc-status.service';

@Component({
  selector: 'pcalc-calc-step3',
  templateUrl: './calc-step3.component.html',
  styleUrls: ['./calc-step3.component.scss']
})
export class CalcStep3Component implements OnInit {
  constructor(private StatusService: CalcStatusService) {}

  ngOnInit() {}

  expand(event) {
    const allElements = event.target.parentElement.parentElement.childNodes;
    for (const e of allElements) {
      console.info('💖:', e.localName);
      if (e.className === 'expanded' && e === event.target.parentElement) {
        console.info(e.localName, 'ALREADY EXPANDED 😎');
      }
      if (e.className === 'expanded' && e !== event.target.parentElement) {
        e.classList.remove('expanded');
        e.classList.add('closed');
      }
      if (e.className === 'closed' && e === event.target.parentElement) {
        e.classList.remove('closed');
        e.classList.add('expanded');
        this.StatusService.updateTabOpen(e.localName);
      }
      if (e.className === 'closed' && e !== event.target.parentElement) {
        console.info(e.localName, 'ALREADY CLOSED 😴');
      }
    }
  }
}
