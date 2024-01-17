import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import Swal from 'sweetalert2';
import { DarkModeService } from '../../service/dark-mode/dark-mode.service';

@Component({
  selector: 'app-counsellor-dash',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './counsellor-dash.component.html',
  styleUrl: './counsellor-dash.component.css',
})
export class CounsellorDashComponent {
  isDarkMode = false;
  private subscription: Subscription;

  constructor(
    private darkModeService: DarkModeService,
    private router: Router
  ) {
    this.subscription = this.darkModeService.isDarkMode$.subscribe(
      (darkMode: boolean) => {
        this.isDarkMode = darkMode;
      }
    );
  }

  openCallDialog() {
    Swal.fire({
      title: 'Call Details',
      html:
        '<input id="name" class="swal2-input" placeholder="Name">' +
        '<input id="number" class="swal2-input" placeholder="Number">' +
        '<select id="callType" class="swal2-select">' +
        '<option value="incoming">Incoming</option>' +
        '<option value="outgoing">Outgoing</option>' +
        '</select>',
      focusConfirm: false,
      preConfirm: () => {
        const name = (document.getElementById('name') as HTMLInputElement)
          .value;
        const number = (document.getElementById('number') as HTMLInputElement)
          .value;
        const callType = (
          document.getElementById('callType') as HTMLSelectElement
        ).value;
        // Process the values as needed
        console.log('Name:', name);
        console.log('Number:', number);
        console.log('Call Type:', callType);
      },
    });
  }

  navigateComponent(value: string) {
    console.log('fuck you');
    switch (value) {
      case 'dashboard':
        this.router.navigate(['/c-dashboard']);
        break;
      case 'inquiries':
        this.router.navigate(['/inquire-registration']);
        break;
      case 'issues':
        this.router.navigate(['/inquiry-list']);
        break;
      case 'viewtask':
        this.router.navigate(['/c-task']);
        break;
      case 'logout':
        this.router.navigate(['/']);
        break;
      case 'callhistory':
        this.router.navigate(['/c-call-history']);
        break;
      default:
        console.log('Not defined URL');
    }
  }

  imageUrl = 'assets/images/girl.png';

  isSidebarHidden = false;
  isDashboardSectionVisible = true;
  isInquiriesSectionVisible = false;

  ngOnInit() {
    this.setupSideMenuClickEvent();
    this.setupToggleSidebar();
    this.setupSearchButton();
    this.setupWindowResize();
    // this.setupSwitchMode();
  }

  private setupSideMenuClickEvent() {
    const allSideMenu = document.querySelectorAll(
      '#sidebar .side-menu.top li a'
    );
    allSideMenu.forEach((item) => {
      const li = (item as HTMLElement).parentElement;

      item.addEventListener('click', () => {
        allSideMenu.forEach((i) => {
          (i as HTMLElement).parentElement?.classList.remove('active');
        });
        li?.classList.add('active');
      });
    });
  }

  private setupToggleSidebar() {
    const menuBar = document.querySelector(
      '#content nav .bx.bx-menu'
    ) as HTMLElement;
    const sidebar = document.getElementById('sidebar');

    menuBar.addEventListener('click', () => {
      sidebar?.classList.toggle('hide');
    });
  }

  private setupSearchButton() {
    const searchButton = document.querySelector(
      '#content nav form .form-input button'
    ) as HTMLElement;
    const searchButtonIcon = document.querySelector(
      '#content nav form .form-input button .bx'
    ) as HTMLElement;
    const searchForm = document.querySelector('#content nav form');

    searchButton.addEventListener('click', (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList.contains('show')) {
          searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
      }
    });
  }

  private setupWindowResize() {
    if (window.innerWidth < 768) {
      this.isSidebarHidden = true;
    } else if (window.innerWidth > 576) {
      // Adjust as needed based on your requirements
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        // Adjust as needed based on your requirements
      }
    });
  }

  setupSwitchMode() {
    this.darkModeService.toggleDarkMode();
    const switchMode = document.getElementById(
      'switch-mode'
    ) as HTMLInputElement;
    if (switchMode.checked) {
      this.changeDarkMode(true);
    } else {
      this.changeDarkMode(false);
    }
  }

  private changeDarkMode(value: boolean) {
    const routerBody = document.getElementById('router-body');
    if (value) {
      routerBody?.classList.add('dark-mode');
      document.body.classList.add('dark');
    } else {
      routerBody?.classList.remove('dark-mode');
      document.body.classList.remove('dark');
    }
  }

  showDashboard() {
    this.isDashboardSectionVisible = true;
    this.isInquiriesSectionVisible = false;
  }

  showInquiries() {
    this.isDashboardSectionVisible = false;
    this.isInquiriesSectionVisible = true;
  }
}
