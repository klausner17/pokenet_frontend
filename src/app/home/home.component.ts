import { Raid } from './../models/Raid';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { RaidService } from '../raid/raid.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  raids: Raid[];

  constructor(private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activedRouter.data.subscribe((info) => {
      this.raids = info.raids;
    });
  }

}
