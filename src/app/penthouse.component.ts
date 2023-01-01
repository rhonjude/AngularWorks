import { Component } from "@angular/core";

@Component({
    selector:'pent',
    template:`<p>This is a new line from {{penttitle}}<p>`,
    styleUrls:['./app.component.css']
})
export class PentHouse{
    penttitle:string = 'pent';
}