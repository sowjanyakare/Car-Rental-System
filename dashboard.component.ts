
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName: string = '';

  ngOnInit() {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userName = parsedUser.name;
    }
  }
}

