import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// @Component({
//   selector: 'app-update-policy-modal',
//   templateUrl: './update-policy-modal.component.html',
//   styleUrls: ['./update-policy-modal.component.css'],
//   imports: [FormsModule]
// })
@NgModule({
  
  imports: [FormsModule]
})

  export class UpdatePolicyModalComponent {
  @Input() policy: any;
  @Output() policyUpdated = new EventEmitter<void>();

  APIUrl = 'http://localhost:5074/api/';
  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}
  updatedPolicy = {
    id: 1,  // Example ID, should be dynamically set
    policyNumber: 'POL654321',
    policyHolderName: 'Jane Doe',
    startDate: '2024-09-01',
    endDate: '2025-09-01',
    type: 'Auto',
    premiumAmount: 750.00
  };
  // Method to update an existing insurance policy
  updatePolicy() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put(`${this.APIUrl}insurancepolicies/${this.updatedPolicy.id}`, this.updatedPolicy, { headers })
      .subscribe({
        next: () => {
          this.getPolicy(); // Refresh the policy list after update
          this.resetForm(); // Reset the form after update
        },
        error: (error) => {
          console.error('Error updating policy:', error);
          // Optionally, display an error message to the user
        }
      });
  }
  closeModal() {
    this.activeModal.dismiss('Cross click');
  }


  // Method to fetch all policies (to refresh the list)
  getPolicy() {
    // Implementation to fetch policies
  }

  // Method to reset the form after updating the policy
  resetForm() {
    this.updatedPolicy = {
      id: 0,  // Clear the ID
      policyNumber: '',
      policyHolderName: '',
      startDate: '',
      endDate: '',
      type: '',
      premiumAmount: 0
    };
  }
}
