import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<app-chipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
