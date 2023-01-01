import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteeComponentComponent } from './trustee-component.component';

describe('TrusteeComponentComponent', () => {
  let component: TrusteeComponentComponent;
  let fixture: ComponentFixture<TrusteeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusteeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
