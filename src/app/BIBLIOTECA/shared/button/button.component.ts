import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() icon?: string;
  @Input() color?: string;
  @Input() size?: string;
  @Input() iconPosition?: string;
  @Input() fullWidth?: boolean;
  @Input() outlined?: boolean;
  @Input() inverted?: boolean;
  @Input() rounded?: boolean;
  @Input() loading?: boolean;
  @Input() isDisabled?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  get buttonsClass() {
    return `
      ${this.color ? `is-${this.color}` : ''}
      ${this.size ? `is-${this.size}` : ''}
      ${this.fullWidth ? 'is-fullwidth' : ''}
      ${this.outlined ? 'is-outlined' : ''}
      ${this.inverted ? 'is-inverted' : ''}
      ${this.rounded ? 'is-rounded' : ''}
      ${this.loading ? 'is-loading' : ''}
    `;
  }
}
