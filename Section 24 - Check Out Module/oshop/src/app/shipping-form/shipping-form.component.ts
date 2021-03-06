import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../models/order';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ShoppingCart } from '../models/ShoppingCart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;

  shipping = {};
  userId: string;
  userSubscription: Subscription;

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router){}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    console.log(this.shipping);
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['order-success', result.key]);
  }   
}
