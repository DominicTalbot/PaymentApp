import { Component, signal } from '@angular/core';
import { PaymentDetails } from './payment-details/payment-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaymentDetails],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaymentApp');
}
