import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
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

  protected form = new FormGroup({
    habito: new FormControl('', [Validators.required]),

    checkForm: new FormGroup(
      Object.fromEntries(
        this.dias.map((option) => [
          option.id,
          new FormControl(false, { nonNullable: true }),
        ])
      )
    ),
  });

  // get selectedValues() {
  //   return Object.keys(this.form.controls.checkForm.value).filter(
  //     (key) => this.form.controls.checkForm.value[key]
  //   );
  // }

  onFormSubmit() {
    console.log('Form');
    console.log(this.form.value);
  }
}
