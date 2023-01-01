import { Injectable } from "@angular/core";
import { IProduct } from "src/app/product/product-component";

@Injectable({
    providedIn:'root'
})
export class LoginService{
    prods:IProduct[]=[{
        id:101,
        name:'shoes nike',
        price:1800,
        rating:3,
        imageUrl:'../../assets/images/prodimg1.jpg',
        quantity:0
      
      },
      {
        id:102,
        name:'book',
        price:1500,
        rating:4,
        imageUrl:'../../assets/images/prodimg2.jpg',
        quantity:0
      },
      {
        id:103,
        name:'doll',
        price:800,
        rating:5,
        imageUrl:'../../assets/images/prodimg3.jpg',
        quantity:0
      }];
    log(name:string,pass:string):string{
        console.log(pass);
        if(name==='rhon'&&pass==='qwerty123'){
            return 'authentication success'
        }
        else{
            return 'authentication failed'
        }


    }
    logProducts(){
        
        console.log(this.prods);
    }
}