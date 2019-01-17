import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pcalc-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: [ './page-not-found.component.scss' ],
})
export class PageNotFoundComponent implements OnInit {

  secondsToTimeout = 3;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const timer = setInterval(() => {
        if (this.secondsToTimeout !== 0) {
          this.secondsToTimeout--;
        } else {
          clearInterval(timer);
          // clearTimeout(timer);
          this.router.navigate([ '/calculator' ]);
        }
      },
      1000);
  }
}
