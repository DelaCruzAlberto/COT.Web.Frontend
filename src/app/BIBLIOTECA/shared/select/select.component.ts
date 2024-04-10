import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

interface SelectOption {
  label: string;
  value: string;
  isDisabled?: boolean;
}
 
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges {
  @Input() options: SelectOption[] = [];
  @Input() default?: string;
  @Input() removeFirstEmptyOption?: string;
  @Input() selectLabel?: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() showLabel?: boolean = true;

  selectedValue?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && this.options) {
      this.handleOptionsChange();
    }

    if (changes['default']) {
      this.handleDefaultChange();
    }
  }

  handleOptionsChange(): void {
    const hasEmptyOption = this.options.some(option => option.label === "" && option.value === "");
    if (!hasEmptyOption && !this.removeFirstEmptyOption) {
      this.options.unshift({ label: "", value: "", isDisabled: false });
    }

    if (this.default === undefined || this.default === "") {
      this.selectedValue = "";
    }
  }

  handleDefaultChange(): void {
    if (this.default !== undefined) {
      this.selectedValue = this.default;
    } else {
      this.selectedValue = "";
    }
  }

  onChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
    this.onValueChange.emit(this.selectedValue);
  }
}
 