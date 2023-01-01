import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventDetailsComponentComponent } from './event-details-component.component';

describe('EventDetailsComponentComponent', () => {
  let component: EventDetailsComponentComponent;
  let fixture: ComponentFixture<EventDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('h1 check',()=>{
    fixture.detectChanges();
    const rootEle:DebugElement = fixture.debugElement;
    const h1 = rootEle.query(By.css('h1'));

    const h1Native:HTMLElement=h1.nativeElement;
    expect(h1Native.textContent).toEqual("Event List");
  });
it('should render message @input',()=>{
  let msg = "a new message";
  component.message=msg;
  fixture.detectChanges();
  const value = fixture.nativeElement.querySelector('#mssg')?.textContent;
  expect(value).toEqual(msg);
})

});
