import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaidComponent } from './newraid.component';

describe('NewRaidComponent', () => {
  let component: NewRaidComponent;
  let fixture: ComponentFixture<NewRaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
