import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcoursesComponent } from './ugcourses.component';

describe('UgcoursesComponent', () => {
  let component: UgcoursesComponent;
  let fixture: ComponentFixture<UgcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
