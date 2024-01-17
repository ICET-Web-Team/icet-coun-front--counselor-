import { Component } from '@angular/core';
import { DarkModeService } from '../../service/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-c-task-list',
  standalone: true,
  imports: [],
  templateUrl: './c-task-list.component.html',
  styleUrl: './c-task-list.component.css',
})
export class CTaskListComponent {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode: boolean) => {
        this.isDarkMode = darkMode;
      }
    );
  }
  imgUrlTask: String = 'assets/images/payment.png';
  imgUrlC: String = 'assets/images/correct.png';
  imgUrlSide: String = 'assets/images/slider.png';
  isFilterPopUp: boolean = false;

  showfilterPopUp() {
    const filterPopup = document.getElementById('filterPopup');
    if (this.isFilterPopUp) {
      this.closefilterPopUp();
    } else {
      if (filterPopup) {
        filterPopup.style.display = 'block';
        this.isFilterPopUp = true;
      }
    }
  }

  closefilterPopUp() {
    const filterPopup = document.getElementById('filterPopup');
    if (filterPopup) {
      filterPopup.style.display = 'none';
      this.isFilterPopUp = false;
    }
  }

  isSearchBtnClicked() {
    this.closefilterPopUp();
  }
}
