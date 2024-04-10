import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableComponent } from './collapsable.component';

describe('CollapsableComponent', () => {
  let component: CollapsableComponent;
  let fixture: ComponentFixture<app-collapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
