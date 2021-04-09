import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenDimensionService } from 'src/app/core/_services/screen/screen-dimension.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public showOption = false;
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
      this.showOption = false;
    }

    this.tinyScreen = cond;
  }

  onClickMenu(){
    this.showOption = !this.showOption;
  }

}
