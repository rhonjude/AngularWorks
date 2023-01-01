import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


export class country{
  id:string='';
  name:string='';
  

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
export class Trustee{
  id!:number;
  name!:string;
  country!:string;
  gender!:string;
  passport!:string;

}

@Component({
  selector: 'trustee',
  templateUrl: './trustee-component.component.html',
  styleUrls: ['./trustee-component.component.css']
})
export class TrusteeComponentComponent implements OnInit {
  @ViewChild('trusteeForm',{})trusteeForm!:NgForm;
  trust!:Trustee;
ngOnInit(): void {
  this.trust={
    id:1,
    name:'Rhon',
    gender:'male',
    country:'1',
    passport:'QWE123'
  };
  setTimeout(()=>{
    this.trusteeForm.setValue(this.trust);
    
  })
}
  countries:country[]=[
    new country("0","Select a country"),
    new country("1","India"),
    new country("2","Canada"),
    new country("3","Australia")
  ];
  onSubmit(trustee:any){


    console.log(trustee.value);
    trustee.resetForm();



  }
}
