import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Core/authentication.service';

@Component({
  selector: 'pcalc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: [ './authentication.component.scss' ],
})
export class AuthenticationComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
  }

}
