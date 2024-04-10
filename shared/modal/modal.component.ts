import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isActive?: boolean = false;
  @Input() title?: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
    this.isActive = true;
  }
  closeModal() {
    this.isActive = false;
    this.close.emit();
  }
}
