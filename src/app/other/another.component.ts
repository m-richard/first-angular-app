import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
