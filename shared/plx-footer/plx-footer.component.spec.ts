import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlxFooterComponent } from './plx-footer.component';

describe('PlxFooterComponent', () => {
  let component: PlxFooterComponent;
  let fixture: ComponentFixture<PlxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlxFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
