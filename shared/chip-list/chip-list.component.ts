import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent {
  inputValue: string = '';
  isInputActive: boolean = false;
  selectedItems: string[] = [];
  availableItems: string[] = [];
  @Input() chipList: string[] = [];
  @Input() placeholder: string = "Agregar items";
  @Output() getSelectedData: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.availableItems = [...this.chipList];
  }

  addSelectedItem(item: string): void {
    if (item.trim() !== '') {
      if (!this.selectedItems.includes(item)) {
        const index = this.availableItems.indexOf(item);
        if (index !== -1) {
          this.availableItems.splice(index, 1);
        }
        this.selectedItems.push(item);
      }
    }
    this.inputValue = '';
    this.toggleInputActive(false);
  }

  removeSelectedItem(item: string): void {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
      this.availableItems.push(item);
    }
  }

  toggleInputActive(active: boolean): void {
    this.isInputActive = active;
  }

  onGetSelectedData() {
    this.getSelectedData.emit(this.selectedItems);
  }

}
