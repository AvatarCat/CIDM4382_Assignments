import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponentComponent } from './my-test-component.component';

describe('MyTestComponentComponent', () => {
  let component: MyTestComponentComponent;
  let fixture: ComponentFixture<MyTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
