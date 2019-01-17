import { Component, OnInit } from '@angular/core';
import { CalcStatusService } from 'src/app/Core/calc-status.service';

@Component({
  selector: 'pcalc-calc-status',
  templateUrl: './calc-status.component.html',
  styleUrls: ['./calc-status.component.scss']
})
export class CalcStatusComponent implements OnInit {

  constructor(public statusService: CalcStatusService) {}

  ngOnInit() {
  }
}
