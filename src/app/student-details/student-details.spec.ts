import { TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';

import { StudentDetails } from './student-details';

describe('StudentDetails', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [StudentDetails],

      providers: [

        provideRouter([]),

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

  });

  it('should create', () => {

    const fixture = TestBed.createComponent(StudentDetails);

    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component).toBeTruthy();

  });

});