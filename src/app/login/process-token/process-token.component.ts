import { AuthService } from './../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-token',
  templateUrl: './process-token.component.html',
  styleUrls: ['./process-token.component.css']
})
export class ProcessTokenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    let token = this.route.snapshot.queryParams['token'];
    if (token) {
      this.auth.authenticate(token);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
