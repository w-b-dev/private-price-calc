import { Component, OnInit } from '@angular/core';
import { CalcStatusService } from 'src/app/Core/calc-status.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pcalc-calc-status',
  templateUrl: './calc-status.component.html',
  styleUrls: ['./calc-status.component.scss'],
})
export class CalcStatusComponent implements OnInit {

  entries;

  constructor(public statusService: CalcStatusService, private httpClient: HttpClient) {
    this.entries = null;
  }

  ngOnInit() {
    const x = this.httpClient
      .get('http://wp.local/wp-json', { observe: 'response' })
      .subscribe(
        result => {
          this.entries = result;
          console.info(this.entries);
        },
        error1 => console.error(error1),
        () => console.info('Complete.'),
      );

    console.info(x);
  }
}
