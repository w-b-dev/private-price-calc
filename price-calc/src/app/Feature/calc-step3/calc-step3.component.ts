import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pcalc-calc-step3',
  templateUrl: './calc-step3.component.html',
  styleUrls: [ './calc-step3.component.scss' ],
})
export class CalcStep3Component implements OnInit {

  @Output() expanded: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  expand(event) {
    if (event.target.parentElement.className === 'expanded') {
      // event.target.parentElement.classList.remove('expanded');
    } else {
      this.expanded.emit(3);
      const current = event.target.parentElement.parentElement.getElementsByClassName('expanded');
      console.info(current);
      Array.prototype.forEach((e,i,a) => {
        console.info(i, e);
        // e.classList.remove('expanded');
      });
      event.target.parentElement.classList.add('expanded');
    }
  }
}
