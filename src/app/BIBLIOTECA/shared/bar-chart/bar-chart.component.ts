import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

import { BarChartData } from "./models/BarChartData";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() data: BarChartData[][] = [];
  showTooltip: boolean = false;
  tooltipText: string = "";
  page: number = 0;
  maxPages: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.setMaxPage();
    }
  }
  calculatePercentage(value: number): number {
    const max = this.data[this.page].reduce((acc, data) => {
      return Math.max(acc, data.children.reduce((childAcc, child) => {
        return childAcc + child.value;
      }, 0));
    }, 0);
    return (value / max) * 100;
  }
  
  toggleTooltip(child: any) {
    this.tooltipText = child.tooltipText;
    this.showTooltip = !this.showTooltip;
  }
  prevPage() {
    this.page = this.page > 0 ? this.page - 1 : this.maxPages - 1;
  }
  
  nextPage() {
    this.page = this.page < this.maxPages - 1 ? this.page + 1 : 0;
  }
  
  
  ngOnInit() {
    this.setMaxPage();
  }
  
  setMaxPage() {
    this.maxPages = this.data.length;
  }
  
}