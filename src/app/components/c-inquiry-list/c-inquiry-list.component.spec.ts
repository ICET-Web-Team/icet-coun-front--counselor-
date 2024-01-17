import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInquiryListComponent } from './c-inquiry-list.component';

describe('CInquiryListComponent', () => {
  let component: CInquiryListComponent;
  let fixture: ComponentFixture<CInquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CInquiryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CInquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
