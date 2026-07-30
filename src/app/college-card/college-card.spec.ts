import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCard } from './college-card';

describe('CollegeCard', () => {
  let component: CollegeCard;
  let fixture: ComponentFixture<CollegeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
