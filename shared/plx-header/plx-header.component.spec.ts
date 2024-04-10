import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlxHeaderComponent } from './plx-header.component';

describe('PlxHeaderComponent', () => {
  let component: PlxHeaderComponent;
  let fixture: ComponentFixture<PlxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlxHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
