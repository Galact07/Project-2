import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-update-policy-modal',
  templateUrl: './update-policy-modal.component.html',
  styleUrls: ['./update-policy-modal.component.css']
})
export class UpdatePolicyModalComponent {
  @Input() policy: any;
  @Output() policyUpdated = new EventEmitter<void>();

  APIUrl = 'your-backend-url/';
  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}



  closeModal() {
    this.activeModal.close();
  }

  updatePolicy() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(`${this.APIUrl}insurancepolicies/${this.policy.id}`, JSON.stringify(this.policy), { headers }).subscribe(() => {
      this.policyUpdated.emit();
      this.closeModal();
    });
  }
}
