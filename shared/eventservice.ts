import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:"root"

})
export class EventService{
    url:string = 'api/events/';
    constructor(private http:HttpClient){}

    getEvents():Observable<any[]>{
        return this.http.get<any[]>(this.url);
    }
}