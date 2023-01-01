import { Injectable } from "@angular/core";

export class Animals{
    id:number=0;
    name:string='';
    age:number=0;
    imageUrl:string='';
    constructor(id:number,name:string,age:number,imageUrl:string)
    {

    }
}
@Injectable({
    providedIn:'root'
})
export class AnimalService{
    public getAnimals(){
        let animals:Animals[];
        animals=[
            {
                id:1,
                name:'tiger',
                age:13,
                imageUrl:'../../assets/images/img1.jpg'
              },
              {
                id:2,
                name:'giraffe',
                age:12,
                imageUrl:'../../assets/images/img2.jpg'
              },
              {
                id:3,
                name:'deer',
                age:15,
                imageUrl:'../../assets/images/img3.jpg'
              }
        ]
        console.log(`animals: ${JSON.stringify(animals)}`);
        return animals;
    }

    getAnimalById(id:number){
        let animal:Animals[]=this.getAnimals();
        return animal.find(a=>a.id==id);
    }
}

