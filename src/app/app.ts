import { Component, signal } from '@angular/core';
import { ContadorEstados } from './signals/component/contador-estados/contador-estados';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ContadorEstados, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-intermediate-developer');
}
