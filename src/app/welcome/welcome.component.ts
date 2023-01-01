import { Component } from '@angular/core';
import { LoginService } from 'shared/loginservice';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private logIn:LoginService){

  }
  pagetitle:string = 'welcome';
  name:string='';
  pass:string='';
  msg:string='';
  logClicked(){
    this.msg=this.logIn.log(this.name,this.pass);
    console.log(this.msg);

  }

 

}