import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DarkModeService } from '../../service/dark-mode/dark-mode.service';

@Component({
  selector: 'app-c-inquiry-list',
  standalone: true,
  imports: [],
  templateUrl: './c-inquiry-list.component.html',
  styleUrl: './c-inquiry-list.component.css',
})
export class CInquiryListComponent {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode: boolean) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
