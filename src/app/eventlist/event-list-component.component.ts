import { Component, OnInit } from '@angular/core';
import { EventService } from 'shared/eventservice';
import { IEvent } from './eventlist';

@Component({
  selector: 'eventlist',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.css']
})
export class EventListComponentComponent implements OnInit {
  errorMsg:string="Not found";
  events:IEvent[] = [];
  mssg:string='hello';
  constructor( private eventService:EventService){}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((res)=>{
      this.events = res;
      console.log(this.events);
    });

    
  }



}
