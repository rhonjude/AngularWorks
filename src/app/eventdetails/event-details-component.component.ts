import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../eventlist/eventlist';

@Component({
  selector: 'eventdetails',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.css']
})
export class EventDetailsComponentComponent implements OnInit {
@Input() eventDetails:IEvent[] = [];
@Output() sendData:EventEmitter<IEvent>=new EventEmitter<IEvent>();
@Input() message:string='';

ngOnInit():void{
  
}
sendEvent(event:IEvent){
  this.sendData.emit(event);
}

}
