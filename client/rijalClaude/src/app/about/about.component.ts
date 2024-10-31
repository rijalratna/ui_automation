import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-about',
  template: `<h2>About</h2><p>This is the about page.</p>`,
  styles: [],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class AboutComponent {}
