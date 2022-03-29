import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/Authentication/_services/logout.service';
import { UserInfoService } from 'src/app/Authentication/_services/user-info.service';
import { UserInterface } from 'src/app/commonInterfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: UserInterface|null|undefined;

  constructor(private _userInfoService: UserInfoService, private logoutService: LogoutService) {
    this._userInfoService.userInfo$.subscribe((user: UserInterface|null) => {
      this.userInfo = user;
    })
   }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout();
  }

}

