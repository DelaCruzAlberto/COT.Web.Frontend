import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropfileComponent } from './dropfile.component';

describe('DropfileComponent', () => {
  let component: DropfileComponent;
  let fixture: ComponentFixture<DropfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
