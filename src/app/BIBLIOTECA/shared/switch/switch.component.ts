import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  @Input() value?: boolean;
  @Input() size?: string;

  @Output() onValueChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.value = checked;
    this.onValueChange.emit(checked);
  }

  get switchClass() {
    return `
      switch 
    `;
  }
}
