import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  nick: String =
    'https://assets-prd.ignimgs.com/2022/07/13/nicolas-cage-in-con-air-1657720981366.jpg';
}
