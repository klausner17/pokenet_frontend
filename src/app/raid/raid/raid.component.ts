import { Component, OnInit, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { ProfileService } from "./../../profile/profile.service";
import { PokemonGym } from "./../../models/PokemonGym";
import { Raid } from "./../../models/Raid";
import { RaidService } from "../raid.service";
import { Pokemon } from "../../models/Pokemon";
import { Trainner } from "../../models/Trainner";
import { MaterializeAction } from "angular2-materialize";
import { RaidTrainner } from "../../models/RaidTrainner";

@Component({
  selector: "app-raid",
  templateUrl: "./raid.component.html",
  styleUrls: ["./raid.component.css"]
})
export class RaidComponent implements OnInit {
  raid: Raid;
  modalActions: EventEmitter<string | MaterializeAction>;
  myTrainners: Trainner[];

  constructor(
    private activedRoute: ActivatedRoute,
    private raidService: RaidService,
    private profileService: ProfileService
  ) {
    this.modalActions = new EventEmitter<string | MaterializeAction>();
  }

  ngOnInit() {
    this.activedRoute.data.subscribe(info => {
      this.raid = info.raid;
      this.myTrainners = info.myTrainners;
    });
  }

  alreadyJoin(trainner: Trainner): boolean {
    for(let i = 0; i < this.raid.raidTrainners.length; i++) {
      return trainner.id == this.raid.raidTrainners[i].trainner.id;
    }
  }

  join(trainner: Trainner) {
    this.raidService
      .joinToRaid(this.raid.id, trainner.id)
      .subscribe((result: RaidTrainner) => {
        let raidTrainner = new RaidTrainner();
        raidTrainner.trainner = trainner;
        this.raid.raidTrainners.push(raidTrainner);
      });
    this.modalActions.emit({ action: "modal", params: ["close"] });
  }

  allowUnjoin(trainner: Trainner): boolean {
    for (let i = 0; i < this.myTrainners.length; i++) {
      if (trainner.user.id == this.myTrainners[i].user.id) return true;
    }
    return false;
  }

  unjoin(trainner: Trainner) {
    this.raidService
      .unjoinToRaid(this.raid.id, trainner.id)
      .subscribe(result => {
        this.raid.raidTrainners.forEach( (element: RaidTrainner, index: number) => {
            if (element.trainner.id === trainner.id) {
              this.raid.raidTrainners.splice(index, 1);
            }
          });
      });
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ["open"] });
  }
  cancel() {
    this.modalActions.emit({ action: "modal", params: ["close"] });
  }
}
