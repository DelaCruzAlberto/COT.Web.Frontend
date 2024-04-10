import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() horizontal: boolean = false;
  @Input() isDisabled: boolean = true;
  @Output() onValueChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  selectedValues: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: Event, value: string) {
    const checkboxElement = event.target as HTMLInputElement;
    const filterElementToDisable = this.options.find((item) => (item.value == checkboxElement.value))
    
    if(filterElementToDisable.isDisabled){
      return;
    }
    
    if (checkboxElement.checked) {
      this.selectedValues.push(value);
    } else {
      const index = this.selectedValues.indexOf(value);
      if (index !== -1) {
        this.selectedValues.splice(index, 1);
      }
    }
    this.onValueChange.emit(this.selectedValues);
  }
}
