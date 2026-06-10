import { computed, effect, Injectable, signal } from '@angular/core';
import { DatosTarea } from '../interface/datos-tarea';

@Injectable({
  providedIn: 'root',
})
export class EstadoTareaServicio {

  // estado privado
  private readonly _tareas = signal<DatosTarea[]>([]);

  // estado público
  readonly tareas = this._tareas.asReadonly();

  // agregar tarea
  agregarTarea(titulo: string) {
    const nuevaTarea: DatosTarea = {
      id: Date.now(),
      titulo,
      completado: false
    };

    this._tareas.update(tareas => [...tareas, nuevaTarea])
  }

  // actualizar - marcar como completada
  actualizarTarea(id: number) {
    this._tareas.update(tareas => tareas.map(
      t => t.id === id ? { ...t, completado: !t.completado} : t
    ));
  }

  //computed
  //Total tareas
  totalTareas = computed(() =>
    this._tareas().length
  );

  //tareas completadas
  tareasCompletadas = computed(() =>
    this._tareas().filter(t =>
      t.completado).length
  );

  //Tareas pendientes
  tareasPendientes = computed(() =>
  this._tareas().filter(t =>
  !t.completado).length
  );

  constructor() {
    effect(() => {
      console.log('total tareas: ', this.totalTareas())
      console.log('tareas Completadas: ', this.tareasCompletadas());
    });
  }
}
