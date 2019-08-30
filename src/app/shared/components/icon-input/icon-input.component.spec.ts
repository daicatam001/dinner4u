import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsIconInputComponent } from './icon-input.component';

describe('BsIconInputComponent', () => {
  let component: BsIconInputComponent;
  let fixture: ComponentFixture<BsIconInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BsIconInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsIconInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
