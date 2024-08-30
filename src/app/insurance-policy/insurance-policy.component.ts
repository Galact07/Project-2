import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePolicyModalComponent } from '../update-policy-modal/update-policy-modal.component';

@Component({
  selector: 'app-insurance-policy',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css'],
})
export class InsurancePolicyComponent implements OnInit{
  name = 'Roshan';
  title = 'Insurance CRUD Application';
  APIUrl = "http://localhost:5074/api/";
  policy: any[] = [];
  newPolicy: any = {};

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) { }

  logout() {
    // Logic to handle logout, e.g., clearing session data
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.getPolicy();
  }

  getPolicy():void {
    this.http.get(this.APIUrl + 'insurancepolicies').subscribe(data => {
      this.policy = data as any[];
    });
  }

  deletePolicy(id: number) {
    this.http.delete(`${this.APIUrl}insurancepolicies/${id}`).subscribe(() => {
      this.getPolicy(); // Refresh the policy list after deletion
    });
  }

  addPolicy() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    this.http.post(this.APIUrl + 'insurancepolicies', this.newPolicy, { headers })
      .subscribe({
        next: () => {
          this.getPolicy(); // Refresh the policy list
          this.resetForm(); // Reset the form
        },
        error: (error) => {
          console.error('Error adding policy:', error);
          // Optionally, you can display an error message to the user
        }
      });
  }
  

  resetForm() {
    this.newPolicy = {};
  }
  openUpdateModal(policy: any) {
    const modalRef = this.modalService.open(UpdatePolicyModalComponent, { size: 'lg' });
    modalRef.componentInstance.policy = policy;

    modalRef.result.then(
      () => this.getPolicy(), // Refresh the policy list after update
      () => {} // Handle dismissals if needed
    );
  }

  // openUpdateModal(policy: any): void {
  //   const modalRef = this.modalService.open(UpdatePolicyModalComponent);
  //   modalRef.componentInstance.policy = policy;
  //   modalRef.result.then(() => {
  //     this.getPolicy();
  //   }, () => {});
  // }
}