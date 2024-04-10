import { Component, OnInit, Input } from '@angular/core';
import { PieChartData } from './models/PieChartData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() data: PieChartData[] = [];

  total = 0;
  selectedColor: string = '';
  tooltipVisible: boolean = false;
  tooltipText: string = '';
  selectedData: { value: number, color: string, text: string } | null = null;
  selectedColorIndex: number | null = null;


  ngOnInit(): void {
    this.total = this.data.reduce((a, b) => a + b.value, 0);
  }

  getAngle(value: number) {
    return (value / this.total) * 2 * Math.PI;
  }

  getSlicePath(value: number, index: number) {
    const startAngle = this.getStartAngle(index);
    const endAngle = this.getEndAngle(value, index);

    const x1 = 120 + Math.sin(startAngle) * 100;
    const y1 = 120 - Math.cos(startAngle) * 100;

    const x2 = 120 + Math.sin(endAngle) * 100;
    const y2 = 120 - Math.cos(endAngle) * 100;

    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

    return `M120,120 L${x1},${y1} A100,100 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  }

  private getStartAngle(index: number) {
    let startAngle = 0;
    for (let i = 0; i < index; i++) {
      startAngle += this.getAngle(this.data[i].value);
    }
    return startAngle;
  }

  private getEndAngle(value: number, index: number) {
    const startAngle = this.getStartAngle(index);
    const angle = this.getAngle(value);
    return startAngle + angle;
  }

  showTooltip(color: string) {
    const index = this.data.findIndex((item) => item.color === color);
    this.selectedColorIndex = index !== -1 ? index : null;
    this.selectedColor = color;
    this.selectedData = this.data.find((item) => item.color === color) || null;
    if (this.selectedData) {
      this.tooltipVisible = true;
    }
  }

  hideTooltip() {
    this.selectedColor = '';
    this.tooltipVisible = false;
    this.selectedColorIndex = null;
    this.tooltipText = '';
  }

  getPercentage(value: number | undefined): string {
    if (value && this.total !== 0) {
      const percentage = (value / this.total) * 100;
      return percentage.toFixed(0) + '%';
    }
    return '';
  }

}
