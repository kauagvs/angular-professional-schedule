import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: String | null;
  isLoggedIn: boolean;

  constructor(public auth: AuthService) {
    this.userName = this.auth.getUserName();

    this.isLoggedIn = auth.isLoggedIn();
  }

  ngOnInit(): void {}
}
