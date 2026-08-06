import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Employee } from '../models/empolyee';

import { selectEmployees } from '../store/selectors/employee.selectors';

import {
  addEmployee,
  updateEmployee
} from '../store/actions/employee.actions';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit {

  employeeForm!: FormGroup;

  employeeId = 0;

  departments = [
    'Computer',
    'Mechanical',
    'Civil',
    'Electrical',
    'Electronics'
  ];

  subjects = [
    'Angular',
    'Java',
    'Python',
    'C#',
    'SQL',
    'Machine Learning'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {

    this.employeeForm = this.fb.group({

      name: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      email: [
        '',
        [Validators.required, Validators.email]
      ],

      password: [
        '',
        [
          Validators.required,
          this.passwordValidator
        ]
      ],

      department: [
        '',
        Validators.required
      ],

      subject: [
        '',
        Validators.required
      ],

      qualification: [
        '',
        Validators.required
      ],

      experience: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ]
      ],

      city: [
        '',
        Validators.required
      ],

      address: [
        '',
        Validators.required
      ]

    });

  }

  ngOnInit(): void {

    this.employeeId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    if (this.employeeId) {

      this.loadEmployee();

    }

  }

  loadEmployee() {

    this.store.select(selectEmployees)
      .subscribe(employees => {

        const employee = employees.find(
          x => x.id === this.employeeId
        );

        if (employee) {

          this.employeeForm.patchValue(employee);

        }

      });

  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {

    const value = control.value || '';

    const hasUpper = /[A-Z]/.test(value);

    const hasLower = /[a-z]/.test(value);

    const hasNumber = /[0-9]/.test(value);

    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const hasLength = value.length >= 8;

    return hasUpper &&
      hasLower &&
      hasNumber &&
      hasSpecial &&
      hasLength
      ? null
      : { invalidPassword: true };

  }
  get password() {

    return this.employeeForm.get('password');

  }

  hasUpperCase(): boolean {

    return /[A-Z]/.test(this.password?.value || '');

  }

  hasLowerCase(): boolean {

    return /[a-z]/.test(this.password?.value || '');

  }

  hasNumber(): boolean {

    return /[0-9]/.test(this.password?.value || '');

  }

  hasSpecialCharacter(): boolean {

    return /[!@#$%^&*(),.?":{}|<>]/.test(this.password?.value || '');

  }

  hasMinLength(): boolean {

    return (this.password?.value || '').length >= 8;

  }

  submit() {

    console.log("Submit button clicked");

    if (this.employeeForm.invalid) {

      this.employeeForm.markAllAsTouched();

      return;

    }

    const employee: Employee = {

      id: this.employeeId || Date.now(),

      ...this.employeeForm.value

    };

    console.log(employee);

    if (this.employeeId) {

      this.store.dispatch(
        updateEmployee({ employee })
      );

      alert("Teacher Updated Successfully");

    }

    else {

      this.store.dispatch(
        addEmployee({ employee })
      );

      alert("Teacher Registered Successfully");

    }

    this.employeeForm.reset();

    this.router.navigate(['/employee-list']);

  }

}