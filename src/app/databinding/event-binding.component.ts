import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">
      Click me!
    </button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter();
  onClicked() {
    this.clicked.emit('It works!');
  }
}
