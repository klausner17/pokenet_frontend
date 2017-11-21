import { MaterializeAction } from "angular2-materialize";
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../profile.service';
import { Trainner } from '../../models/Trainner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  trainnerEdit: Trainner;

  constructor(private profileService: ProfileService) {
    this.profile = new Profile();
    this.profile.trainners = new Array<Trainner>();
    this.trainnerEdit = new Trainner();
    this.trainnerEdit.name = "";
  }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((result: Profile) => {
        this.profile = result;
      } );
    this.profileService.getTrainners()
      .subscribe((result: Trainner[]) => {
        this.profile.trainners = result;
      })
  }

  adicionar() {
    console.log(this.trainnerEdit);
    this.profileService.addTrainner(this.trainnerEdit)
      .subscribe(result => this.profile.trainners.push(result));
  }

  modalActions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
