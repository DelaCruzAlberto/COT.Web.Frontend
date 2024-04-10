export interface BarChartData {
  label: string;
  children: BarChartChild[];
}

export interface BarChartChild {
  value: number;
  color: string;
  tooltipText: string;
}
