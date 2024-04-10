import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() headers: any[] = [];
  @Input() data: any[] = [];
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() striped: boolean = false;
  @Input() bordered: boolean = false;
  @Input() narrow: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() itemsPerPageOptions: number[] = [5, 10, 20, 50];
  @Input() hasCheckbox: boolean = false;
  @Output() editItem: EventEmitter<any> = new EventEmitter<any>();

  selectedRows: any[] = [];
  totalRows = 0;
  totalPages = 0;
  rows: any[] = [];
  sortField: string = '';
  sortAscending: boolean = true;
  sortedData: any[] = [];
  selectAll: boolean = false;

  constructor() {
    this.selectedRows = Array(this.data.length).fill(false);
  }

  ngOnChanges() {
    this.totalRows = this.data.length;
    this.totalPages = Math.ceil(this.totalRows / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages);
    this.currentPage = Math.max(this.currentPage, 1);
    this.sortData();
    this.getRows();
    this.onItemsPerPageChange(this.pageSize)
    this.rows = this.getRows();
  }

  selectAllRows(checked: boolean): void {
    if (checked) {
      for (let i = 0; i < this.data.length; i++) {
        this.selectedRows.push(i);
      }
    } else {
      this.selectedRows = [];
    }
  }

  onRowSelect(rowIndex: number, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    const index = this.selectedRows.indexOf(rowIndex);

    if (isChecked) {
      if (index === -1) {
        this.selectedRows.push(rowIndex);
      }
    } else {
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
  }


  getSelectedData() {
    return this.selectedRows.map(index => this.data[index]);
  }



  sort(header: any) {
    if (header.sortable) {
      if (this.sortField === header.key) {
        this.sortAscending = !this.sortAscending;
      } else {
        this.sortAscending = true;
        this.sortField = header.key;
      }
      this.sortData();
      this.rows = this.getRows();
    }
  }

  getIcons(actions: any[]): string[] {
    return actions.map(action => action.icon);
  }

  sortData() {
    if (this.sortField) {
        this.sortedData = this.data.slice(0).sort((a, b) => {
            const aField = a[this.sortField];
            const bField = b[this.sortField];
            let comparison;

            if (typeof aField === 'number' && typeof bField === 'number') {
                comparison = aField - bField;
            } else {
                comparison = aField.toString().localeCompare(bField.toString());
            }

            return this.sortAscending ? comparison : -comparison;
        });

    } else {
        this.sortedData = this.data.slice();
    }
}

  onItemsPerPageChange(value: number) {
    this.pageSize = value;
    this.currentPage = 1;
    this.rows = this.getRows();
    this.totalPages = Math.ceil(this.totalRows / this.pageSize);
  }


  getRows(): any {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalRows);

    const rows = this.sortedData.slice(startIndex, endIndex);
    return rows.map(row => Object.values(row));
  }

  getPages(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  nextPage() {
    this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
    this.rows = this.getRows();
  }

  prevPage() {
    this.currentPage = Math.max(this.currentPage - 1, 1);
    this.rows = this.getRows();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.rows = this.getRows();
  }



  getTableClass() {
    let classes = 'table';
    if (this.striped) {
      classes += ' is-striped';
    }
    if (this.bordered) {
      classes += ' is-bordered';
    }
    if (this.narrow) {
      classes += ' is-narrow';
    }
    if (this.hoverable) {
      classes += ' is-hoverable';
    }

    return classes;
  }

  onEditItem(row: any, actionIndex: number) {
    const actionKey = this.headers.findIndex(header => header.hasActions);
    if (actionKey) {
      const action = row[actionKey][actionIndex];
      if (action && !action.disabled) {
        action.action(row);
      }
    }
  }

  convertIndexToArrayObjects() {
    const selectedData = this.getSelectedData();
    return selectedData;
  }

  isLinkHeader(header: any): boolean {
    return header.isLink && header.href;
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }
}
