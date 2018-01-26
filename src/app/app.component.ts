import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { SnorlaxLoadingComponent } from './utils/snorlax-loading/snorlax-loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  snorlaxTemplate = SnorlaxLoadingComponent;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logged(): boolean {
    return this.authService.isAuthenticate();
  }

  logout() {
    this.authService.logout();
  }

}
