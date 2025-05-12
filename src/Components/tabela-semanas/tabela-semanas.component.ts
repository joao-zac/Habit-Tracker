import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { arrayDays, IDays } from '../../utils/days';
import { habitos, IHabits } from '../../utils/dumbHabits';

@Component({
  selector: 'app-tabela-semanas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-semanas.component.html',
  styleUrl: './tabela-semanas.component.scss',
})
export class TabelaSemanasComponent {
  diasSemana: String[] = arrayDays.map((i) => i.dia);
  habitos: IHabits[] = habitos;
}
