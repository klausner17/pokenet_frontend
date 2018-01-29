import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidResumeComponent } from './raid-resume.component';

describe('RaidResumeComponent', () => {
  let component: RaidResumeComponent;
  let fixture: ComponentFixture<RaidResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
