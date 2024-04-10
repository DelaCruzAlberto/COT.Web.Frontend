import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() color?: string;
  @Input() value?: string;
  @Input() size?: string;
  @Input() placeholder?: string;
  @Input() type?: string;
  @Input() rounded?: boolean;
  @Input() isRequired?: boolean;
  @Input() disabled?: boolean;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() showPassword: boolean = false;
  @Input() requiredLabel?: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  originalColor?: string;
  error: boolean = false;

  parentElement: any;

  constructor() { }

  ngOnInit(): void {
    this.isRequired = this.isRequired ?? false;
    this.requiredLabel = this.requiredLabel || 'El campo es requerido';
    this.originalColor = this.color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('value')) {
      this.checkValueAndRequired();
    }
  }

  onFocus() {
    this.parentElement = document.activeElement?.parentElement;
    this.parentElement.classList.add('focused');
  }

  onFocusOut() {
    this.parentElement.children[0].value.length > 0
      ? null
      : this.parentElement.classList.remove('focused');
  }

  onValueChange(event: any) {
    this.value = event.target.value;
    this.checkValueAndRequired();
    this.valueChange.emit(this.value);
  }

  private checkValueAndRequired(): void {
    if (this.isRequired && this.value?.length == 0) {
      this.error = true;
      this.color = "danger";
    } else {
      this.error = false;
      this.color = this.originalColor;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'hidePassword' : 'password';
  }
}
