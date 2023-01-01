import { Time } from "@angular/common";

export interface IEvent{
    id:number;
    name:string;
    date:Date;
    time:Time;
    price:number;
    imageUrl:string;
    location:ILocation[];
    sessions:ISessions[];
}

export interface ILocation{
    address:string;
    city:string;
    country:string;
}
export interface ISessions{
    id:number;
    name:string;
    presenter:string;
    duration:string;
    level:string;
}