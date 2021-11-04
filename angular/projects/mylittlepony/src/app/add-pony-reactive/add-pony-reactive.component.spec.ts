import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPonyReactiveComponent } from './add-pony-reactive.component';

describe('AddPonyReactiveComponent', () => {
  let component: AddPonyReactiveComponent;
  let fixture: ComponentFixture<AddPonyReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPonyReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPonyReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
