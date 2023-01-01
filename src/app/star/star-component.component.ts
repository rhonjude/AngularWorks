import { Component, EventEmitter, Input, OnChanges,Output } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnChanges {
  @Input() rating:number = 0;

  @Output() ratingclick:EventEmitter<string>=new EventEmitter<string>();
  cropWidth:number = 75;
  ngOnChanges():void{
    console.log("onchange")
    this.cropWidth =this.rating * 75/5;
  }
  onClick(){
    let msg =  document.querySelector('#h1')?.textContent ?? 'hello';
    this.ratingclick.emit(msg);
    // this.ratingclick.emit(`rating ${this.rating} is clicked`);
  }
}


