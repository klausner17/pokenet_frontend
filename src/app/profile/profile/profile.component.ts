import { Trainner } from './../../models/Trainner';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private profileService: ProfileService) {
    this.profile = new Profile();
    this.profile.trainners = new Array<Trainner>();
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
    let eu: Trainner = new Trainner();
    eu.name = 'klausner17';
    eu.level = 27;
    this.profileService.addTrainner(eu)
      .subscribe(result => this.profile.trainners.push(result));
  }

}
