import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireRegComponent } from './inquire-reg.component';

describe('InquireRegComponent', () => {
  let component: InquireRegComponent;
  let fixture: ComponentFixture<InquireRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquireRegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquireRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
