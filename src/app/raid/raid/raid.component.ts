import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Raid } from './../../models/Raid';
import { RaidService } from '../raid.service';
import { Trainner } from '../../models/Trainner';
import { MaterializeAction, toast } from 'angular2-materialize';
import { RaidTrainner } from '../../models/RaidTrainner';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  raid: Raid;
  modalActions: EventEmitter<string | MaterializeAction>;
  myTrainners: Trainner[];

  constructor(
    private activedRoute: ActivatedRoute,
    private raidService: RaidService
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
    for (let i = 0; i < this.raid.raidTrainners.length; i++) {
      return trainner.id === this.raid.raidTrainners[i].trainnerId;
    }
  }

  join(trainner: Trainner) {
    this.blockUI.start();
    this.raidService.joinToRaid(this.raid.id, trainner.id)
      .subscribe((result: RaidTrainner) => {
        this.raidService.getRaidById(this.raid.id)
          .subscribe((raidReload: Raid) => {
            this.raid = raidReload;
            this.blockUI.stop();
          }, () => {
            let toastMessage = 'Erro ao carregar reide.';
            toastMessage = toastMessage;
            this.blockUI.stop();
            toast(toastMessage, 3000, 'red');
          });
      }, () => {
        let toastMessage = 'Erro ao inserir treinador.';
        toastMessage = toastMessage;
        this.blockUI.stop();
        toast(toastMessage, 3000, 'red');
      });
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  allowUnjoin(id: number): boolean {
    for (let i = 0; i < this.myTrainners.length; i++) {
      if (id === this.myTrainners[i].id) {
        return true;
      }
    }
    return false;
  }

  unjoin(trainner: Trainner) {
    let newList: Array<RaidTrainner> = [];
    this.blockUI.start();
    this.raidService
      .unjoinToRaid(this.raid.id, trainner.id)
      .subscribe(() => {
        for (let i = 0; i < this.raid.raidTrainners.length; i++) {
          const raidTrainner = this.raid.raidTrainners[i];
          if (raidTrainner.trainnerId !== trainner.id) {
            newList.push(raidTrainner);
          }
        }
        this.raid.raidTrainners = newList;
        this.blockUI.stop();
      }, () => {
        let toastMessage = 'Erro ao remover treinador.';
        toastMessage = toastMessage;
        this.blockUI.stop();
        toast(toastMessage, 3000, 'red');
      });
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  cancel() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }
}
