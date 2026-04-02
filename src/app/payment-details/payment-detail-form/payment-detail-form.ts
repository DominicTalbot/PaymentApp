import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetailsService } from '../../shared/payment-details';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.html',
})
export class PaymentDetailForm {
  constructor(public service: PaymentDetailsService) {}

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
