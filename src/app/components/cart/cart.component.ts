import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products : any = []
  public grandTotal !: number
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item:any){
    this.cartService.removeItem(item)
  }

  emptyCart(){
    this.cartService.removeAllCart()
  }

}
