import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/_services/authentication/authentication.service';
import { ScreenDimensionService } from 'src/app/core/_services/screen/screen-dimension.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() options;

  public showOption = false;
  public tinyScreen = false;

  constructor(private _sd_service: ScreenDimensionService, private router: Router, private _as: AuthenticationService) { }

  ngOnInit(): void {
    this.checkTinyScreen();
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkTinyScreen();
  }

  checkTinyScreen() {
    let cond = this._sd_service.checkTinyScreen(window.innerWidth);

    if (cond != this.tinyScreen) {
      this.showOption = false;
    }

    this.tinyScreen = cond;
  }

  onClickMenu(){
    this.showOption = !this.showOption;
  }

  goToPage(option) {
    if (option.str == 'Log-out') {
      this._as.logout();
    }
    this.router.navigate([option.path]);  
  }

}
