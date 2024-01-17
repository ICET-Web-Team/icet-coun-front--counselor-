import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellorDashComponent } from './counsellor-dash.component';

describe('CounsellorDashComponent', () => {
  let component: CounsellorDashComponent;
  let fixture: ComponentFixture<CounsellorDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounsellorDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounsellorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
