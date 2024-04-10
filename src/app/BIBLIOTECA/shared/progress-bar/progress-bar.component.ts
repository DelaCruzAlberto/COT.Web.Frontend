import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() color?: String;
  @Input() size?: String;
  @Input() value?: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.value == "" ? this.value = null : this.value
  }
}
