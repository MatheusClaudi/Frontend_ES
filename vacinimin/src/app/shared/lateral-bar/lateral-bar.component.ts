import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenDimensionService } from 'src/app/core/_services/screen/screen-dimension.service';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent implements OnInit {

  public showMenu = true;

  public tinyScreen = false;

  constructor(private _sd_service: ScreenDimensionService) { }

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
      this.showMenu = !this.showMenu;
    }
    

    this.tinyScreen = cond;
  }

  onHideMenu() {
    this.showMenu = false;
  }

  onShowMenu() {
    this.showMenu = true;
  }

}
