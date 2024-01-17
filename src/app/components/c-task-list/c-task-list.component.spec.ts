import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTaskListComponent } from './c-task-list.component';

describe('CTaskListComponent', () => {
  let component: CTaskListComponent;
  let fixture: ComponentFixture<CTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTaskListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
