import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { IDays, arrayDays } from '../../mocks/days';
import { HabitActionsService } from '../../services/habit-actions.service';
import { IHabits } from '../../mocks/dumbHabits';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  constructor(public habitActionsService: HabitActionsService) {}

  closeModal(): void {
    this.close.emit();
  }

  protected dias: IDays[] = arrayDays;

  protected form = new FormGroup({
    nome: new FormControl('', [Validators.required]),

    status: new FormGroup(
      Object.fromEntries(
        this.dias.map((option) => [
          option.id,
          new FormControl(false, { nonNullable: true }),
        ])
      )
    ),
  });

  onFormSubmit() {
    const formValue = this.form.value;
    if (formValue.nome && typeof formValue.nome === 'string') {
      this.habitActionsService.add({
        nome: formValue.nome,
        status: this.dias.map(
          (day) => (formValue.status as { [x: string]: boolean })[day.id]
        ),
      });
    }
  }
}
