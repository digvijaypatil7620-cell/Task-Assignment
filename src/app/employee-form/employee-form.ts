import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.employeeForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [
        Validators.required,
        this.passwordValidator
      ]]

    });

  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasLength = value.length >= 8;

    return hasUpper && hasNumber && hasLength
      ? null
      : { invalidPassword: true };

  }

  submit() {

    if (this.employeeForm.valid) {

      console.log(this.employeeForm.value);

      alert("Employee Registered Successfully");

    } else {

      this.employeeForm.markAllAsTouched();

    }

  }

}