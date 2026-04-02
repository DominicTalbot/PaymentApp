import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetails } from './payment-detail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentDetailsService {
  url = environment.apiBaseUrl + '/PaymentDetails';
  formData: PaymentDetails = new PaymentDetails();
  constructor(private http: HttpClient) {}

  // <-- now returns an observable
  refreshList(): Observable<PaymentDetails[]> {
    return this.http.get<PaymentDetails[]>(this.url);
  }
}
