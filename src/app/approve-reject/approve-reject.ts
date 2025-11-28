import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface RequestItem {
  id: number;
  item: string;
  requester: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-approve-reject',
  imports: [CommonModule, FormsModule],
  templateUrl: './approve-reject.html',
  styleUrl: './approve-reject.css',
})
export class ApproveReject {
   requests: RequestItem[] = [
    { id: 1001, item: 'Laptop Purchase', requester: 'John Doe', status: 'Pending' },
    { id: 1002, item: 'Software License', requester: 'Jane Smith', status: 'Pending' },
  ];

  toastMessage: string = '';
  showToast: boolean = false;

  showMessage(msg: string) {
    this.toastMessage = msg;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 2500);
  }

  approve(request: RequestItem) {
    request.status = 'Approved';
    this.showMessage(`Request #${request.id} Approved`);
  }

  reject(request: RequestItem) {
    request.status = 'Rejected';
    this.showMessage(`Request #${request.id} Rejected`);
  }
}
