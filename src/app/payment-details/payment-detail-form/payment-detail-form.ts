import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentDetailsService } from '../../shared/payment-details';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.html',
})
export class PaymentDetailForm {
  constructor(public service: PaymentDetailsService) {}
}
