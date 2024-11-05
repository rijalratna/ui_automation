import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent {
  cardPayment = {
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    amount: 0
  };

  bankPayment = {
    accountNumber: '',
    routingNumber: '',
    bankName: '',
    accountHolderName: '',
    amount: 0
  };
  username: string | null = '';
  constructor(private http: HttpClient,private sessionService: SessionService) {}

  payWithCard() {
    this.http.post('/api/payment/payWithCard', this.cardPayment).subscribe(response => {
      console.log('Card payment response:', response);
      alert('Card payment successful!');
    });
  }

  payWithBank() {
    this.http.post('/api/payment/payWithBank', this.bankPayment).subscribe(response => {
      console.log('Bank payment response:', response);
      alert('Bank payment successful!');
    });
  }
}
