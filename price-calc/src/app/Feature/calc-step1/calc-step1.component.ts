import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'pcalc-calc-step1',
  templateUrl: './calc-step1.component.html',
  styleUrls: [ './calc-step1.component.scss' ],
})
export class CalcStep1Component implements OnInit {

  @Output() expanded: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  expand(event) {
    if (event.target.parentElement.className === 'expanded') {
      /*ALREADY EXPANDED*/
    } else {
      this.expanded.emit(1);
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
