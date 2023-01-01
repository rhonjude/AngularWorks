import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponentComponent } from './star-component.component';

describe('StarComponentComponent', () => {
  let component: StarComponentComponent;
  let fixture: ComponentFixture<StarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check output is correctly emitting',()=>{
    spyOn(component.ratingclick,'emit');
    const div  =fixture.nativeElement.querySelector('.crop');
    fixture.nativeElement.querySelector('#h1').textContent='sending hello to parent';
    const inputText = fixture.nativeElement.querySelector('#h1').textContent;
    fixture.detectChanges();

    div.click();
    fixture.detectChanges();
    expect(component.ratingclick.emit).toHaveBeenCalledWith(inputText);
  });
});
