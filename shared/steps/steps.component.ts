import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() steps: { title: string, content: string }[] = [];
  @Input() currentStep: number = 0;
  constructor() { }

  ngOnInit(): void { }

}
