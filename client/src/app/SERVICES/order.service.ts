import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private firestore: AngularFirestore,
    private shoppingCart: ShoppingCartService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toast: ToastrService
  ) {}

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    zipcode: new FormControl(''),
    telephone: new FormControl(''),
    password: new FormControl(''),
    orderNotes: new FormControl(''),
    paymentType: new FormControl(''),
    directTransfer: new FormControl(false),
    paypal: new FormControl(false),
  });

  createOrder(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('orders')
        .add(data)
        .then(
          (res: any) => {
            const navigationExtras: NavigationExtras = {
              state: {
                message: data.message,
                products: [data.Order],
                orderId: Math.floor(Math.random() * 1000000000),
                total: this.shoppingCart.getTotal(),
              },
            };
            this.spinner.hide();
            this.router.navigate(['/thankyou'], navigationExtras).then((p) => {
              localStorage.removeItem('shopping_cart');
            });
          },
          (err: any) => reject(err)
        );
    });
  }
}
