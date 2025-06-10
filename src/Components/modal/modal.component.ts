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
    console.log('Form');
    console.log(this.form.value);
  }
}
