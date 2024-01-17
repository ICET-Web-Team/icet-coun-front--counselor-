import { Injectable } from "@angular/core";
import { CounsellorDashComponent } from "../../pages/counsellor-dash/counsellor-dash.component";



@Injectable({
  providedIn: 'root',
})
export class StatusComponentService {
  constructor() {}

  isDarkModeEnable: boolean = false;
  getPages() {
    return [
      // {
      //  component : LoginComponent
      // },
      // {
      //   component: ManagerDashComponent,
      // },
      {
        component: CounsellorDashComponent,
      },
    ];
  }

  updateIsDarkMode(value: boolean) {
    this.isDarkModeEnable = value;
  }
}
