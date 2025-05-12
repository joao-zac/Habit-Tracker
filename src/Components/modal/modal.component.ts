import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { IDays, arrayDays } from '../../utils/days';

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

  protected form = new FormGroup(
    Object.fromEntries(
      this.dias.map((option) => [
        option.id,
        new FormControl(false, { nonNullable: true }),
      ])
    )
  );

  get selectedValues() {
    return Object.keys(this.form.value).filter((key) => this.form.value[key]);
  }

  // onFormSubmit() {
  //   console.log('Habito Form');
  //   console.log(this.habitForm.value);
  // }
}
