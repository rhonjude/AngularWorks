import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirectivesDirective implements OnInit {

  constructor(private ele:ElementRef) { }

  ngOnInit(): void {
    this.ele.nativeElement.textContent += '😊'
  }

}
