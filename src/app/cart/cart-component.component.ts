import { Component,EventEmitter,Input,OnChanges,Output } from '@angular/core';
import { IProduct } from '../product/product-component';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnChanges {
  @Input() product1:IProduct={
    id:0,
    name:"",
    price:0,
    rating:0,
    imageUrl:'',
    quantity:0
    }
  
    productList:IProduct[] = [];
    ngOnChanges(): void{
      this.productList.push(this.product1);
      console.log(this.productList);
    }

  

}
