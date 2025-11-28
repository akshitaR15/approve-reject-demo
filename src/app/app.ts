import { Component, signal } from '@angular/core';
import { ApproveReject } from './approve-reject/approve-reject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ApproveReject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('approve-reject-demo');
}
