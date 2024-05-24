import { Component } from '@angular/core';
import { AdhocComponent } from './adhoc/adhoc.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AdhocComponent],
  standalone: true
})
export class AppComponent {}