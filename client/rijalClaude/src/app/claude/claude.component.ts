import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app-service.service';
import { CommonModule } from '@angular/common';
import { SessionService } from '../session.service';
import { FormsModule } from '@angular/forms';
import { FileResponse } from '../FileResponse';

@Component({
  selector: 'app-claude',
  templateUrl: './claude.component.html',
  styleUrls: ['./claude.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class ClaudeComponent implements OnInit {
  uploadedFiles: FileResponse[] = [];
  desiredFolder: string = '';
  selectedFiles: FileList | null = null;
  isLoggedIn: boolean = false;
  files: FileResponse[] = [];
  username: string | null = '';

  constructor(private apiService: ApiService, private sessionService: SessionService) {}

  ngOnInit(): void {
    this.username = this.sessionService.getUsername(); // Get username from session
    if (this.username) {
      this.loadFiles(this.desiredFolder); // Load files when component initializes
    }
  }

  loadFiles(folder: string): void {
    this.apiService.getUserFiles(this.username!).subscribe(
      (files: FileResponse[]) => {
        this.files = files.sort((a, b) => a.webkitRelativePath.localeCompare(b.webkitRelativePath)); // Sort by webkitRelativePath
      },
      error => {
        console.error('Error loading files:', error);
      }
    );
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.uploadedFiles = Array.from(event.target.files);
    }
  }

  onUpload(): void {
    const formData = new FormData();
    this.uploadedFiles.forEach(file => {
      formData.append('files', file, file.name);
    });
    formData.append('folder', this.desiredFolder);
    formData.append('username', this.username!);

    this.apiService.uploadFiles(formData).subscribe(
      response => {
        console.log('Upload successful', response);
        this.loadFiles(this.desiredFolder); // Refresh the file list after upload
      },
      error => {
        console.error('Upload error', error);
      }
    );
  }

  deleteFile(filePath: string, fileName: string): void {
    this.apiService.deleteFile(this.username!, filePath, fileName).subscribe(
      response => {
        console.log('File deleted successfully', response);
        this.loadFiles(this.desiredFolder); // Refresh the file list after deletion
      },
      error => {
        console.error('Error deleting file:', error);
      }
    );
  }

  openFolder(folderName: string): void {
    this.desiredFolder = folderName;
    this.loadFiles(this.desiredFolder); // Load files from the selected folder
  }
}