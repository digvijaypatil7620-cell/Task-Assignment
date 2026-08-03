import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentForm } from './student-form';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('StudentForm', () => {

  let component: StudentForm;

  let fixture: ComponentFixture<StudentForm>;

  let store: Store;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [StudentForm],

      providers: [

        provideMockStore()

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(StudentForm);

    component = fixture.componentInstance;

    store = TestBed.inject(Store);

    fixture.detectChanges();

  });

  it('should create the component', () => {

    expect(component).toBeTruthy();

  });

  it('should initialize student object', () => {

    expect(component.student.name).toBe('');

    expect(component.student.course).toBe('');

  });

  it('should dispatch addStudent action', () => {

    spyOn(store, 'dispatch');

    component.student = {

      name: 'Rahul',

      email: 'rahul@test.com',

      course: 'Angular',

      city: 'Pune',

      age: 22

    };

    component.submitForm();

    expect(store.dispatch).toHaveBeenCalled();

  });

  it('should reset form after submit', () => {

    component.student = {

      name: 'Rahul',

      email: 'rahul@test.com',

      course: 'Angular',

      city: 'Pune',

      age: 22

    };

    spyOn(window, 'alert');

    component.submitForm();

    expect(component.student.name).toBe('');

  });

});