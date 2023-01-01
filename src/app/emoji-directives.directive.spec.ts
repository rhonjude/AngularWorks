import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiDirectivesDirective } from './emoji-directives.directive';

@Component({
  template:`<div appEmoji>Test</div>`
})
class HostComponent{}

@NgModule({
  declarations:[HostComponent,EmojiDirectivesDirective],
  exports:[HostComponent]

})
class HostModule{}



describe('EmojiDirectivesDirective', () => {
 let component:HostComponent;
 let element:HTMLElement;
 let fixture:ComponentFixture<HostComponent>;
 
 beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[CommonModule,HostModule],
    declarations:[EmojiDirectivesDirective]
  }).compileComponents();
  fixture = TestBed.createComponent(HostComponent);
  component = fixture.componentInstance;
  element = fixture.nativeElement;

  fixture.detectChanges();
 });
  it('should create an instance', () => {
    
    expect(component).toBeTruthy();
  });
  it('should add emoji', () => {
    const el = element.querySelector('div')?.textContent;

    expect(el).toEqual('Test😊');
  });
});
