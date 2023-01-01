import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginService } from 'shared/loginservice';
import { ProductService } from 'shared/productservice';
import { RepeatPipe } from '../repeat.pipe';

import { ProductComponentComponent } from './product-component.component';

describe('ProductComponentComponent', () => {
  let component: ProductComponentComponent;
  let fixture: ComponentFixture<ProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponentComponent ,RepeatPipe],
      providers:[ProductService,LoginService,HttpClient],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
it('test paragraph content',()=>{
  const msg = 'Hello Rhon';
  
  const p1 = fixture.nativeElement.querySelector('#newmsg')?.textContent;
 
  expect(p1).toEqual(msg);
});
})