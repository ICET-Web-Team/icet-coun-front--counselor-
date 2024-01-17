import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCallHistoryComponent } from './c-call-history.component';

describe('CCallHistoryComponent', () => {
  let component: CCallHistoryComponent;
  let fixture: ComponentFixture<CCallHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCallHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCallHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
