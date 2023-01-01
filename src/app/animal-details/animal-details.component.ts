import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animals, AnimalService } from 'shared/animalservice';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit,OnDestroy {
id:number=0;
anim:Animals|undefined;
sub!:Subscription
constructor(private activatedRoute:ActivatedRoute,private router:Router,private service:AnimalService){}
ngOnDestroy(): void {
  this.sub.unsubscribe();
}
ngOnInit(): void {
  this.sub=this.activatedRoute.paramMap.subscribe((params)=>{
    console.log(params);
    let idd=params.get('id');
    if(idd){
      this.id=+idd;
      console.log(`id ${this.id}`);
    }
    if(this.service.getAnimalById(this.id)){
      this.anim = this.service.getAnimalById(this.id);
      
    }
  })
}
back():void{
  this.router.navigate(['animals']);
}
}
