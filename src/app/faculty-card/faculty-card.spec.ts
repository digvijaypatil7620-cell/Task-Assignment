import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCard } from './faculty-card';

describe('FacultyCard', () => {
  let component: FacultyCard;
  let fixture: ComponentFixture<FacultyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
