import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
