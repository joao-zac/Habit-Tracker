import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-semanas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-semanas.component.html',
  styleUrl: './tabela-semanas.component.scss',
})
export class TabelaSemanasComponent {
  diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  habitos = [
    { nome: 'Ler', status: [true, false, true, false, true, false, true] },
    { nome: 'Correr', status: [false, true, false, true, false, true, false] },
    {
      nome: 'Ginástica',
      status: [true, true, false, false, true, true, false],
    },
    {
      nome: 'Meta de água',
      status: [false, false, true, true, false, false, true],
    },
  ];
}
