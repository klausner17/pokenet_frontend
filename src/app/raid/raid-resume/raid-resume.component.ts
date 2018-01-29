import { Raid } from './../../models/Raid';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raid-resume',
  templateUrl: './raid-resume.component.html',
  styleUrls: ['./raid-resume.component.css']
})
export class RaidResumeComponent implements OnInit {

  @Input() raid: Raid;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewRaid() {
    this.router.navigate([`/raid/${this.raid.id}`]);
  }

}
