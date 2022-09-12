import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerText = 'Este es el footer';

  constructor() {}

  ngOnInit() {}
}
