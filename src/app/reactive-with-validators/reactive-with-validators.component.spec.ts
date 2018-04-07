import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveWithValidatorsComponent } from './reactive-with-validators.component';

describe('ReactiveWithValidatorsComponent', () => {
  let component: ReactiveWithValidatorsComponent;
  let fixture: ComponentFixture<ReactiveWithValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveWithValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveWithValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
