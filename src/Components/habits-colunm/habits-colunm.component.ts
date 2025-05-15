import { Component } from '@angular/core';
import { habitos, IHabits } from "../../utils/dumbHabits"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habits-colunm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habits-colunm.component.html',
  styleUrl: './habits-colunm.component.scss'
})
export class HabitsColunmComponent {
  habitos: IHabits[] = habitos;

}
