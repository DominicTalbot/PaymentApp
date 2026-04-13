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

  get isEdit(): boolean {
    return this.service.formData.paymentDetailId !== 0;
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.paymentDetailId === 0) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
    }
  }

  insertRecord(form: NgForm) {
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

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.service.resetForm(form);
        this.paymentSubmitted.emit();
        this.toastr.info('Updated successfully', 'Payment Detail Register');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
