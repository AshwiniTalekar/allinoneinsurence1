import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgadmissionComponent } from './ugadmission.component';

describe('UgadmissionComponent', () => {
  let component: UgadmissionComponent;
  let fixture: ComponentFixture<UgadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
