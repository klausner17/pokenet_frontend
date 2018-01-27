import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from './profile.service';
import { Trainner } from '../models/Trainner';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

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
  trainnerForm: FormGroup;

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
    this.modalConfirm = new EventEmitter<string|MaterializeAction>();
    this.trainnerEdit = new Trainner();
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(info => {
      this.profile = info.profile;
    });
  }

  createForm() {
    this.trainnerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      level: ['', Validators.compose([Validators.required, Validators.max(40), Validators.min(0)])]
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
            this.profile.trainners.splice(index, 1);
          }
        });
      });
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.trainnerEdit = new Trainner();
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
