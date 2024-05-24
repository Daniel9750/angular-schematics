import { Component } from '@angular/core';

@Component({
  selector: 'app-adhoc',
  templateUrl: './adhoc.component.html',
  styleUrls: ['./adhoc.component.css'],
  standalone: true
})
export class AdhocComponent {
  count: number = 0;

  increment() {
    this.count++;
  }
}