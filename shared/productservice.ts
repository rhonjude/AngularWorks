import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "src/app/product/product-component";
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
}
)
export class ProductService{

    url:string='api/products';
    products:IProduct[]=[];

    private selectedProductSource = new BehaviorSubject<IProduct | null >(null);
    selectedProductChange$=this.selectedProductSource.asObservable();
    constructor(private http:HttpClient){

    }
    getProducts():Observable<IProduct[]>{
      console.log("inside getProducts");
      //what is the logic
      //to get array of IProduct from db
      //get method is a generic method IProduct[]
      //arguments u are passing this.url api/products --- api
      //pipe -- operator in rxjs  where you ca
      return this.http.get<IProduct[]>(this.url).pipe(
  
          tap(data=>{console.log(data);
            //we are assigning data to this.products
            this.products=data;
      }),
          catchError(this.errorHandler)
      );
  
    }
    

    // getProducts():IProduct[]{

    //     return[
    //         {
    //             id:101,
    //             name:'shoes nike',
    //             price:1800,
    //             rating:3,
    //             imageUrl:'../../assets/images/prodimg1.jpg',
    //             quantity:0
              
    //           },
    //           {
    //             id:102,
    //             name:'book',
    //             price:1500,
    //             rating:4,
    //             imageUrl:'../../assets/images/prodimg2.jpg',
    //             quantity:0
    //           },
    //           {
    //             id:103,
    //             name:'doll',
    //             price:800,
    //             rating:5,
    //             imageUrl:'../../assets/images/prodimg3.jpg',
    //             quantity:0
    //           }
    //     ]
    // }

    getProds():Observable<any[]>{

        return this.http.get<any[]>(this.url).pipe(
          tap(data=>{console.log(data);})
        );

    }

    changeSelectedProduct(selectedProduct:IProduct|null):void{
      console.log("in changeselected"+JSON.stringify(selectedProduct));
      this.selectedProductSource.next(selectedProduct);
    }

    errorHandler=(err:any)=>{
      let errorMessage:string;
      if(err.error instanceof ErrorEvent)
      {
        errorMessage = `An error has occured ${err.error.message}`;
      }
      else{
        errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
      }
      console.log(err);
     return throwError(errorMessage);
    }

    newProduct():IProduct{
        return {
    
             id:0,
            name:'',
            price:0,
            rating:0,
            imageUrl:'',
            quantity:0
    
        };
    
      }

      createProduct(product:IProduct):Observable<IProduct>{
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        const newProduct={...product,id:null};

        return this.http.post<IProduct>(this.url,newProduct,{headers}).pipe(
          tap(data=>{

            this.products.push(data);
          },
          catchError(this.errorHandler)
        )
        )
      }

}