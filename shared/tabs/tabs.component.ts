import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() items?: Array<any>;
  @Input() alignment?: string;
  @Input() size?: string;
  @Input() styling?: string;
  @Input() fullWidth?: boolean;

  constructor() { }

  ngOnInit(): void { }

  activateTab(selectedItem: any) {
    this.items?.forEach(item => {
      item.active = false;
    });
    selectedItem.active = true;
    if (selectedItem.click) {
      selectedItem.click();
    }
  }

  get tabsClass() {
    return `tabs ${this.alignment ? 'is-' + this.alignment : ''} ${this.size ? 'is-' + this.size : ''} ${this.styling ? 'is-' + this.styling : ''} ${this.fullWidth ? 'is-fullwidth' : ''}`;
  }
}
