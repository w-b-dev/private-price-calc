import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pcalc-calc-container',
  templateUrl: './calc-container.component.html',
  styleUrls: [ './calc-container.component.scss' ],
})
export class CalcContainerComponent implements OnInit {

  childExpanded = -1;

  constructor() {
  }

  ngOnInit() {
    console.log('CHILD EXPANDED', this.childExpanded);
  }

  updateExpandedChild(event) {
    this.childExpanded = event;
    console.info('😎 UPDATE PARENT', this.childExpanded);
  }

}
