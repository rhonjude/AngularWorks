import { Component,OnInit } from '@angular/core';
import { IAnimals } from './animal-component';

@Component({
  selector: 'animal',
  templateUrl: './animal-component.component.html',
  styleUrls: ['./animal-component.component.css']
})
export class AnimalComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log("inside oninit");
    this.filteredAnimals = this.animals;
  }
  _numAge:number = 0;
  filteredAnimals:IAnimals[]=[];
  imageWidth:number=200;
  imageHeight:number=200;
  showImage:boolean=false;

  get numAge():number{
    return this._numAge;
  }
  set numAge(val:number){
    this._numAge=val;
    this.filteredAnimals = this.filterAnimals(val);
  }

  animals:IAnimals[]=[{
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
imgvisible():void{
this.showImage=!this.showImage;
}

filterAnimals(val:number):IAnimals[]{
  val=this._numAge;
  return this.animals.filter((animal:IAnimals)=>animal.age==val);
  console.log(this.animals.filter((animal:IAnimals)=>animal.age==val));
}

}
