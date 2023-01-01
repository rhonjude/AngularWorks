import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class EventDbService implements InMemoryDbService{
   createDb() {
       return{
        products:[
            {
                id:101,
                 name:"shoes nike",
                price:1800,
                rating:3,
                 imageUrl:"../../assets/images/prodimg1.jpg",
                 quantity:0
            },
            {
                id:102,
                 name:"book",
                price:800,
                rating:4,
                 imageUrl:"../../assets/images/prodimg2.jpg",
                 quantity:0
            },
            {
                id:103,
                 name:"doll",
                price:900,
                rating:5,
                 imageUrl:"../../assets/images/prodimg2.jpg",
                 quantity:0
            }
        ],
        events:[
            {

                id:100,
            
                name:"Dance",
            
                date:"11-Dec-2022",
            
                time:"1.00PM",
            
                price:2000,
            
                imageUrl:"../assets/images/img1.jpg",
            
                location:{
            
                    address:"akurdi",
            
                    city:"pune",
            
                    country:"india"
            
                },
            
                sessions:{
            
                    id:201,
            
                    name:"jay",
            
                    presenter:"sam",
            
                    duration:"2Hours",
            
                    level:"1st"
            
                    
            
            
            
                }
            
            
            
            },
            {

                id:102,
            
                name:"painting",
            
                date:"12-Dec-2022",
            
                time:"4.00PM",
            
                price:3000,
            
                imageUrl:"../assets/images/img1.jpg",
            
                location:{
            
                    address:"akurdi",
            
                    city:"pune",
            
                    country:"india"
            
                },
            
                sessions:{
            
                    id:201,
            
                    name:"jay",
            
                    presenter:"sam",
            
                    duration:"2Hours",
            
                    level:"1st"
            
                    
            
            
            
                }
            
            
            
            }
        ]
       }
   }
}