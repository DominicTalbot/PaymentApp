import { Component, OnInit, signal } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details';
import { PaymentDetailForm } from './payment-detail-form/payment-detail-form';
import { PaymentDetails as PaymentDetailsModel } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.html',
  imports: [PaymentDetailForm],
})
export class PaymentDetails implements OnInit {
  // reactive state
  list = signal<PaymentDetailsModel[]>([]);

  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.service.refreshList().subscribe({
      next: (res) => {
        console.log('✅ API response', res);
        this.list.set(res); // update the signal
        this.service.list = res as PaymentDetailsModel[];
      },
      error: (err) => console.error('❌ API error', err),
    });
  }

  onPaymentSubmitted(): void {
    this.refreshList();
  }

  populateForm(selectedRecord: PaymentDetailsModel): void {
    this.service.formData = { ...selectedRecord };
  }

  onDelete(id: number): void {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
