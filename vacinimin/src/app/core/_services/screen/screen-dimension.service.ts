import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScreenDimensionService {

  constructor() { }


  checkTinyScreen(screenWidth: Number): boolean {
    return screenWidth < 700;
  }
}
