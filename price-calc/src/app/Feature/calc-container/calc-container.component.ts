import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pcalc-calc-container',
  templateUrl: './calc-container.component.html',
  styleUrls: ['./calc-container.component.scss']
})
export class CalcContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  monitor(e) {
    console.info('📞 MONITORED 👀', e);
    // const allElements = event.target.parentElement.parentElement.childNodes;
    // for (const e of allElements) {
    //   console.info('💖:', e.localName);
    //   if (e.className === 'expanded' && e === event.target.parentElement) {
    //     console.info(e.localName, 'ALREADY EXPANDED 😎');
    //   }
    //   if (e.className === 'expanded' && e !== event.target.parentElement) {
    //     e.classList.remove('expanded');
    //     e.classList.add('closed');
    //   }
    //   if (e.className === 'closed' && e === event.target.parentElement) {
    //     e.classList.remove('closed');
    //     e.classList.add('expanded');
    //   }
    //   if (e.className === 'closed' && e !== event.target.parentElement) {
    //     console.info(e.localName, 'ALREADY CLOSED 😴');
    //   }
    // }
  }
}
