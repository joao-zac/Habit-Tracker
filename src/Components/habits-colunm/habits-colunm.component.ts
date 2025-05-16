import { Component } from '@angular/core';
import { IHabits } from '../../mocks/dumbHabits';
import { CommonModule } from '@angular/common';

import { HabitActionsService } from '../../services/habit-actions.service';

@Component({
  selector: 'app-habits-colunm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habits-colunm.component.html',
  styleUrl: './habits-colunm.component.scss',
})
export class HabitsColunmComponent {
  constructor(public habitActionsService: HabitActionsService) {}
  habitos: IHabits[] = [];

  ngOnInit() {
    this.habitos = this.habitActionsService.haaab;
  }

  removeItem(hab: IHabits) {
    console.log('removedo');
    this.habitActionsService.remove(hab);
    console.log(this.habitActionsService.haaab);
  }
}
