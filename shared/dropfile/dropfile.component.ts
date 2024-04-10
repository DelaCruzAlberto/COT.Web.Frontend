import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropfile',
  templateUrl: './dropfile.component.html',
  styleUrls: ['./dropfile.component.scss']
})
export class DropfileComponent implements AfterViewInit {
  @Input() buttonText: string = '';
  @Input() allowedExtensions: string = '';
  @Input() isButton: boolean = true;
  @Input() isDisabled: boolean = false;

  loading: boolean = false;
  isDragging: boolean = false;
  uploadedFiles: { name: string, id: number, progress: number, file: File }[] = [];

  fileIdCounter: number = 1;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  @Output() getItems: EventEmitter<File[]> = new EventEmitter<File[]>();

  constructor() { }

  ngAfterViewInit() {
    if (!this.fileInput) {
      console.error('File input element not found');
    }
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.uploadFiles(files);
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const files: FileList = event.dataTransfer.files;
    this.fileInput.nativeElement.files = files;
    this.uploadFiles(files);
    this.isDragging = false;
  }

  onDragOver(event: any) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: any) {
    event.preventDefault();
    this.isDragging = false;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  uploadFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!this.isAllowedExtension(file.name)) {
        continue;
      }
      const fileObj = { name: file.name, id: this.fileIdCounter++, progress: 0, file: file };
      this.uploadedFiles.push(fileObj);
      this.simulateUploadProgress(fileObj);
    }
  }

  simulateUploadProgress(fileObj: { name: string, id: number, progress: number }) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 40) + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (this.uploadedFiles.every(file => file.progress === 100)) {
          const filesToEmit: File[] = this.uploadedFiles.map(fileObj => fileObj.file);
          this.getItems.emit(filesToEmit);
        }
      }
      fileObj.progress = progress;
    }, 500);
  }

  deleteFile(fileId: number) {
    this.uploadedFiles = this.uploadedFiles.filter(file => file.id !== fileId);
  }

  openFileInNewWindow(file: any) {
    const url = window.URL.createObjectURL(file.file);
    window.open(url, '_blank');
  }

  isAllowedExtension(fileName: string): boolean {
    if (!this.allowedExtensions || this.allowedExtensions.trim() === 'all') {
      return true; 
    }
    const fileExt = fileName.split('.').pop()?.toLowerCase();
    const allowedExts = this.allowedExtensions.toLowerCase().split(', ');
    return allowedExts.includes(fileExt || '');
  }

  getFileNames(): { name: string, id: number, progress: number }[] {
    return this.uploadedFiles;
  }

  shortenFileName(name: string): string {
    const maxLength = 25;
    const extensionLength = 4;

    if (name.length > maxLength) {
      const extensionIndex = name.lastIndexOf('.');
      const fileNameWithoutExtension = name.substring(0, extensionIndex);
      const shortenedFileName = fileNameWithoutExtension.substring(0, maxLength - extensionLength - 3);
      return shortenedFileName + '...' + name.substring(extensionIndex);
    }

    return name;
  }
}
