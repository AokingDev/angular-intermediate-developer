import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorEstadosServicio {

  // Estado privado modificable
  private readonly _contador = signal(0);

  // solo lectura pública
  readonly contadorPublico = this._contador.asReadonly();

  incrementar() {
    this._contador.update(valor => valor  + 1);
  }
}
