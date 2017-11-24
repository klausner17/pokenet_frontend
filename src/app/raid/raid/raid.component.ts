import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProfileService } from './../../profile/profile.service';
import { PokemonGym } from './../../models/PokemonGym';
import { Raid } from './../../models/Raid';
import { RaidService } from '../raid.service';
import { Pokemon } from '../../models/Pokemon';
import { Trainner } from '../../models/Trainner';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {
  raid: Raid;

  constructor(
    private activedRoute: ActivatedRoute,
    private raidService: RaidService
  ) { }

  ngOnInit() {
    this.activedRoute.data.subscribe((info) => {
      this.raid = new Raid();
      this.raid = info.raid;
      console.log(this.raid);
    });
  }
}
