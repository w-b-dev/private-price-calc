import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcStatusService {
  private tabOpen = '';

  constructor() {}

  updateTabOpen(x) {
    this.tabOpen = x;
    console.info('NEW OPEN TAB: ' + x);
  }

  getOpenTab() {
    return this.tabOpen;
  }
}
