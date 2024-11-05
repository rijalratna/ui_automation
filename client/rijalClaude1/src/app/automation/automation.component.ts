import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../app-service.service';  // Assuming this is your service for API calls
import { FileResponse } from '../FileResponse';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.css']
})
export class AutomationComponent implements OnInit {
  username: string | null = '';
  devices: any[] = [];
  skills: string[] = [];
  userFiles: FileResponse[] = [];
  constructor(private apiService: ApiService,private sessionService: SessionService) {}

  ngOnInit(): void {
    this.username = this.sessionService.getUsername();
    this.loadDevices();
    this.loadSkills();
  }

  loadDevices() {
    this.apiService.getDevices().subscribe(data => {
      this.devices = data;
    });
  }

  loadSkills() {
    this.apiService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  controlDevice(device: any, command: string) {
    this.apiService.controlDevice(device.deviceId, command).subscribe(response => {
      console.log('Control response:', response);
    });
  }
}