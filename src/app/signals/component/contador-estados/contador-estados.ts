import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTareaServicio } from '../../service/estado-tarea.servicio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador-estados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador-estados.html',
  styleUrl: './contador-estados.css',
})
export class ContadorEstados {
  estado = inject(EstadoTareaServicio);

  tareas = this.estado.tareas;
  totalTareas = this.estado.totalTareas;
  realizadas = this.estado.tareasCompletadas;
  pendientes = this.estado.tareasPendientes;
  nuevaTarea = '';

  agregaTarea() {
    if (!this.nuevaTarea.trim()) return;

    this.estado.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
  }

  actualizarTarea(id: number) {
    this.estado.actualizarTarea(id);
  }
}
