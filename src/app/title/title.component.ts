import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  webapp = 'página';

  constructor() {}
  ngOnInit() {}
}
