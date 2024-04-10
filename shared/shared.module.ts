import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { ChipComponent } from './chip/chip.component';
import { NotificationComponent } from './notification/notification.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ModalComponent } from './modal/modal.component';
import { PlxHeaderComponent } from './plx-header/plx-header.component';
import { PlxFooterComponent } from './plx-footer/plx-footer.component';
import { SelectComponent } from './select/select.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CollapsableComponent } from './collapsable/collapsable.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { StepsComponent } from './steps/steps.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    TabsComponent,
    TableComponent,
    NavbarComponent,
    ButtonComponent,
    DropdownComponent,
    InputComponent,
    ChipComponent,
    NotificationComponent,
    ProgressBarComponent,
    ModalComponent,
    PlxHeaderComponent,
    PlxFooterComponent,
    SelectComponent,
    PieChartComponent,
    BarChartComponent,
    CollapsableComponent,
    RadioButtonComponent,
    CheckboxComponent,
    StepsComponent,
    SwitchComponent,
    
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ], exports: [
    SpinnerComponent,
    TabsComponent,
    TableComponent,
    NavbarComponent,
    ButtonComponent,
    DropdownComponent,
    InputComponent,
    ChipComponent,
    NotificationComponent,
    ProgressBarComponent,
    ModalComponent,
    PlxHeaderComponent,
    PlxFooterComponent,
    SelectComponent,
    PieChartComponent,
    BarChartComponent,
    CollapsableComponent,
    RadioButtonComponent,
    CheckboxComponent,
    StepsComponent,
    SwitchComponent
  ]
})
export class SharedModule { }
