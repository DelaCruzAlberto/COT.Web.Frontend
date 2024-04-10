// radio-button.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface RadioButtonOption {
  label: string;
  value: string;
  isDisabled?: boolean; 
}

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() options: RadioButtonOption[] = [];
  @Input() horizontal: boolean = false;
  @Input() default: string = "";
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  selectedValue?: string;

  constructor() { }

  ngOnInit(): void {
    const firstEnabledOption = this.options.find(option => !option.isDisabled);
  
    if (firstEnabledOption) {
      this.selectedValue = firstEnabledOption.value;
    } 
  
    if (this.default) {
      const defaultOption = this.options.find(option => option.value === this.default);
      if (defaultOption && !defaultOption.isDisabled) {
        this.selectedValue = this.default;
      }

    }
  }

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    const selectedOption = this.options.find(option => option.value === inputElement.value);

    if (selectedOption?.isDisabled) {
      return;
    }

    this.selectedValue = inputElement.value;
    this.onValueChange.emit(this.selectedValue);
  }
}
