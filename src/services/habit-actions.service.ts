import { Injectable } from '@angular/core';
import { IHabits, habitos } from '../mocks/dumbHabits';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HabitActionsService {
  constructor() {}

  haaab = habitos;

  remove(tarefa: IHabits) {
    const index = this.haaab.findIndex((t) => t.nome === tarefa.nome);
    if (index > -1) {
      this.haaab.splice(index, 1);
    }
  }

  add(tarefa: IHabits) {
    this.haaab.push(tarefa);
  }
}
