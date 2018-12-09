import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pcalc-calc-step2',
  templateUrl: './calc-step2.component.html',
  styleUrls: [ './calc-step2.component.scss' ],
})
export class CalcStep2Component implements OnInit {

  @Output() expanded: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  expand(event) {
    if (event.target.parentElement.className === 'expanded') {
      /*ALREADY EXPANDED*/
      // event.target.parentElement.classList.remove('expanded');
    } else {
      this.expanded.emit(2);
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
