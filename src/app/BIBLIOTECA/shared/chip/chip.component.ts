import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input() text: string = "";
  @Input() isClosable: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  close() {
    this.onClose.emit();
  }

}
