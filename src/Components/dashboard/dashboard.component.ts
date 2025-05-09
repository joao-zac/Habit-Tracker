import { Component } from '@angular/core';
import { TabelaSemanasComponent } from '../tabela-semanas/tabela-semanas.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabelaSemanasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
