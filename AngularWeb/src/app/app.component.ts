import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      console.log('width : ', this.innerWidth);
      
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log('width : ', this.innerWidth);
  }
}
