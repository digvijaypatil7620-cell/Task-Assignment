import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentList } from './student-list';
import { provideStore } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { studentReducer } from '../store/reducers/student.reducers';


describe('StudentList', () => {

  let component: StudentList;
  let fixture: ComponentFixture<StudentList>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        StudentList
      ],

      providers: [

        // NgRx Store
        provideStore({
          students: studentReducer
        }),


        // Activated Route Mock
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }

      ]

    }).compileComponents();


    fixture = TestBed.createComponent(StudentList);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });

});