import { Routes } from '@angular/router';
import { CDashboardComponent } from './components/c-dashboard/c-dashboard.component';
import { InquireRegComponent } from './components/inquire-reg/inquire-reg.component';
import { CInquiryListComponent } from './components/c-inquiry-list/c-inquiry-list.component';
import { CTaskListComponent } from './components/c-task-list/c-task-list.component';
import { CCallHistoryComponent } from './components/c-call-history/c-call-history.component';

export const routes: Routes = [
  {
    path: 'c-dashboard',
    component: CDashboardComponent,
  },
  {
    path: 'inquire-registration',
    component : InquireRegComponent
  },
  {
    path : 'inquiry-list',
    component : CInquiryListComponent
  },
  {
    path : 'c-task',
    component : CTaskListComponent
  },
  {
    path : 'c-call-history',
    component : CCallHistoryComponent
  },
];
