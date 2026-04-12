import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetails } from './payment-detail.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  url = environment.apiBaseUrl + '/PaymentDetails';
  formData: PaymentDetails = new PaymentDetails();
  list: PaymentDetails[] = [];
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) {}

  // <-- now returns an observable
  refreshList(): Observable<PaymentDetails[]> {
    return this.http.get<PaymentDetails[]>(this.url);
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new PaymentDetails();
    this.formSubmitted = false;
  }
}
