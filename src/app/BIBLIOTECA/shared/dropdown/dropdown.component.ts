import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() items?: Array<any>;
  @Input() direction?: string;
  @Input() title?: string;
  @Input() hoverable?: boolean;
  @Input() showArrow?: boolean;
  @Input() icon?: string;
  @Input() color?: string;

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleActive() {
    this.hoverable || this.hoverable == undefined
      ? null
      : this.isActive = !this.isActive;
  }

  get dropdownClass() {
    return `dropdown ${this.isActive ? 'is-active' : ''} ${this.direction ? 'is-' + this.direction : ''} ${this.hoverable || this.hoverable == undefined ? 'is-hoverable' : ''}`;
  }
}
