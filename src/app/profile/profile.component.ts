import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from './profile.service';
import { Trainner } from '../models/Trainner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  trainnerEdit: Trainner;
  modalActions: EventEmitter<string|MaterializeAction>;
  modalConfirm: EventEmitter<string|MaterializeAction>;
  idToDelete: number;

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
    this.modalConfirm = new EventEmitter<string|MaterializeAction>();
    this.trainnerEdit = new Trainner();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(info => {
      this.profile = info.profile;
    });
  }

  adicionar() {
    this.profileService.addTrainner(this.trainnerEdit)
      .subscribe(result => {
        this.trainnerEdit = new Trainner();
        this.profile.trainners.push(result);
      });
  }

  deletar(id: number) {
    this.idToDelete = id;
  }

  remove() {
    this.profileService.deleteTrainner(this.idToDelete)
      .subscribe((res: Response) => {
        this.profile.trainners.forEach((element: Trainner, index: number) => {
          if (element.id === this.idToDelete) {
            this.idToDelete = -1;
            this.profile.trainners.splice(index);
          }
        });
      });
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  openConfirm(id: number) {
    this.idToDelete = id;
    this.modalConfirm.emit({action: 'modal', params: ['open']});
  }
  closeConfirm() {
    this.modalConfirm.emit({action: 'modal', params: ['close']});
  }

}
