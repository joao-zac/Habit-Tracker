import { Component } from '@angular/core';
import { TabelaSemanasComponent } from '../../Components/tabela-semanas/tabela-semanas.component';
import { ModalComponent } from '../../Components/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabelaSemanasComponent, ModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isModalVisible = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}
