import { Component, OnInit } from '@angular/core';
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

  constructor(private profileService: ProfileService) { }

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

}
