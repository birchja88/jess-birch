import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.responsive-component.css']
})
export class AppComponent {
  title = 'jess-birch';

  burgerStatus: boolean = false;

  toggleBurger() {
    this.burgerStatus = !this.burgerStatus;
  }
}
