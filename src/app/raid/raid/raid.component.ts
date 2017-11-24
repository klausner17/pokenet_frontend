import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProfileService } from './../../profile/profile.service';
import { PokemonGym } from './../../models/PokemonGym';
import { Raid } from './../../models/Raid';
import { RaidService } from '../raid.service';
import { Pokemon } from '../../models/Pokemon';
import { Trainner } from '../../models/Trainner';
import { MaterializeAction } from 'angular2-materialize';
import { RaidTrainner } from '../../models/RaidTrainner';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {

  raid: Raid;
  modalActions: EventEmitter<string|MaterializeAction>;
  myTrainners: Trainner[];

  constructor(
    private activedRoute: ActivatedRoute,
    private raidService: RaidService,
    private profileService: ProfileService
  ) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
  }

  ngOnInit() {
    this.profileService.getTrainners()
      .subscribe(result => {
        this.myTrainners = result;
      });
    this.activedRoute.data.subscribe((info) => {
      this.raid = info.raid;
    });
  }

  join(trainner: Trainner) {
    this.raidService.joinToRaid(this.raid.id, trainner.id)
      .subscribe((result: RaidTrainner) => {
        let raidTrainner = new RaidTrainner();
        raidTrainner.trainner = trainner;
        this.raid.raidTrainners.push(raidTrainner);
      });
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  cancel() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }
}
