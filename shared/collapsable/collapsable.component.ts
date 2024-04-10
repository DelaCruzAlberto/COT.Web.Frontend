import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent  {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() isCollapsed: boolean = false;



  toggleCollapsable() {
    this.isCollapsed = !this.isCollapsed;
  }
}
