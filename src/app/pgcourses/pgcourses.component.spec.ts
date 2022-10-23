import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcoursesComponent } from './pgcourses.component';

describe('PgcoursesComponent', () => {
  let component: PgcoursesComponent;
  let fixture: ComponentFixture<PgcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
