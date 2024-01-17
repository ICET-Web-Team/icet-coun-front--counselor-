import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeState = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeState.asObservable();

  toggleDarkMode(): void {
    const current = this.darkModeState.value;
    this.darkModeState.next(!current);
    console.log(this.darkModeState);
  }
}
