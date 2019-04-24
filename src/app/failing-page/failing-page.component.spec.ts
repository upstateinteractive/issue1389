import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailingPageComponent } from './failing-page.component';

describe('FailingPageComponent', () => {
  let component: FailingPageComponent;
  let fixture: ComponentFixture<FailingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
