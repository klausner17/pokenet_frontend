import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnorlaxLoadingComponent } from './snorlax-loading.component';

describe('SnorlaxLoadingComponent', () => {
  let component: SnorlaxLoadingComponent;
  let fixture: ComponentFixture<SnorlaxLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnorlaxLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnorlaxLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
