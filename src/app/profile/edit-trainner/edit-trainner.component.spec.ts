import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainnerComponent } from './edit-trainner.component';

describe('EditTrainnerComponent', () => {
  let component: EditTrainnerComponent;
  let fixture: ComponentFixture<EditTrainnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
