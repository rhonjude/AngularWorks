
import { Component,OnInit,Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { LoginService } from 'shared/loginservice';
import { ProductService } from 'shared/productservice';
import{IProduct} from './product-component';
@Component({
  selector: 'product',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor(private prodservice:ProductService,private logIn:LoginService){

  }

  ngOnInit(): void {
    
    this.prodservice.getProds().subscribe((response)=>{
      this.products=response;
      this.filteredProducts = this.products;

    });
    
  }
  // Adding product [ variables]
  pname:string = '';
  pprice:number = 0;



  addProdFlag:boolean=false;
  qty:number = 0;
  message:string='Hello Rhon';
  _prodname:string = '';
  messageStar:string = '';
  showImage:boolean = false;
filteredProducts:IProduct[] = [];
imageWidth:number=100;
  imageHeight:number=100;

  @Output() sendData:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  get prodname():string{
    return this._prodname;
  }
  set prodname(val:string){
    this._prodname=val;
    this.filteredProducts = this.filterProducts(val);
  }

 products:IProduct[] = [];

imgvisible(){
  this.showImage = !this.showImage;
}
filterProducts(val:string):IProduct[]{
  val = this._prodname;
  return this.products.filter((product:IProduct)=>product.name.startsWith(val));
}
handlerRating(msg:string){
  this.messageStar=msg;
}
productSend:IProduct={
  id:0,
  name:"",
  price:0,
  imageUrl:"",
  rating:0,
  quantity:0
};



outputEvent(product:IProduct){
  product.quantity=product.quantity+1;

  this.productSend=product;
  this.sendData.emit(product);
  console.log(product);

}
onNameClick(prod:IProduct){
  console.log(prod);
  this.prodservice.changeSelectedProduct(prod);
}

data():IProduct{
  return this.productSend;
}
getProd(){
  this.logIn.logProducts();
}
clickAddProd(){
  this.addProdFlag=!this.addProdFlag;
}

onAddProd(){
  this.productSend.name = this.pname;
  this.productSend.price = this.pprice;
  this.prodservice.createProduct(this.productSend).subscribe((res=>console.log(res)));
  console.log("in onAdd"+JSON.stringify(this.productSend));
}
}
