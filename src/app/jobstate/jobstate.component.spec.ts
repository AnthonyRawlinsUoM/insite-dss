import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstateComponent } from './jobstate.component';

describe('JobstateComponent', () => {
  let component: JobstateComponent;
  let fixture: ComponentFixture<JobstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
