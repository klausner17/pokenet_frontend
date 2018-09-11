import { EditTrainnerComponent } from './edit-trainner/edit-trainner.component';
import { Parameter } from './../utils/Parameters';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NewTrainnerModalComponent } from './new-trainner-modal/new-trainner-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from './profile.service';
import { Trainner } from '../models/Trainner';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(info => {
      this.profile = info.profile;
      console.log(info.profile);
    });
  }

  openModal(modal: NewTrainnerModalComponent) {
    modal.showModal(true);
  }

  updateListTrainner(trainner: Trainner) {
    this.blockUI.start();
    this.profileService.getTrainners()
      .subscribe(result => {
        this.profile.trainners = result;
        this.blockUI.stop();
      }, error => {
        this.blockUI.stop();
        toast('Erro ao excluir.', Parameter.toastTime, 'red');
      });
  }

  deleteTrainner(modal: DeleteModalComponent, id: number) {
    modal.idTrainnerRemove = id;
    modal.showModal(true);
  }

  editTrainner(modal: EditTrainnerComponent, trainner: Trainner) {
    modal.trainner = trainner;
    modal.showModal(true);
  }

}
