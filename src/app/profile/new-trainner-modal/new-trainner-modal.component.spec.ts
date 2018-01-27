import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainnerModalComponent } from './new-trainner-modal.component';

describe('NewTrainnerModalComponent', () => {
  let component: NewTrainnerModalComponent;
  let fixture: ComponentFixture<NewTrainnerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainnerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainnerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
