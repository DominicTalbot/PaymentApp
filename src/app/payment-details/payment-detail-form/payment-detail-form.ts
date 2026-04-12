import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetailsService } from '../../shared/payment-details';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.html',
})
export class PaymentDetailForm {
  @Output() paymentSubmitted = new EventEmitter<void>();

  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService,
  ) {}

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.service.resetForm(form);
        this.paymentSubmitted.emit();
        this.toastr.success('Inserted successfully', 'Payment Detail Register');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
