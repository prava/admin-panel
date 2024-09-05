import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-panel';

  isCollapsed = false;
  isShowed = true;
  headerShow = true;
  
  constructor() {
  }

  public toggleLeftBarD() {
    console.log("toggleLeftBarD");
    this.isCollapsed = !this.isCollapsed;
  }
  public toggleLeftBarM() {
    console.log("toggleLeftBarM");
    this.isShowed = !this.isShowed;
  }

  public toggleHeader(){
    console.log("toggleHeader");
    this.headerShow = !this.headerShow;
  }
}
