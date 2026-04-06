import { Component, signal } from '@angular/core';
import { ContadorEstados } from './signals/component/contador-estados/contador-estados';

@Component({
  selector: 'app-root',
  imports: [ContadorEstados],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-intermediate-developer');
}
