import { RaidService } from '../raid.service';
import { Component, OnInit } from '@angular/core';
import { Raid } from '../../models/Raid';

@Component({
  selector: 'app-new-raid',
  templateUrl: './new-raid.component.html',
  styleUrls: ['./new-raid.component.css']
})
export class NewRaidComponent implements OnInit {

  raid: Raid;
  selectOptions = [1,2,3];

  constructor(private raidService: RaidService) {
    this.raid = new Raid();
   }

  ngOnInit() {
  }

}
