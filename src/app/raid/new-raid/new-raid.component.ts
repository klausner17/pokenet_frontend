import { RaidService } from '../raid.service';
import { Component, OnInit } from '@angular/core';
import { Raid } from '../../models/Raid';
import { PokemonGym } from '../../models/PokemonGym';
import { Pokemon } from '../../models/Pokemon';
import { Gym } from '../../models/Gym';

@Component({
  selector: 'app-new-raid',
  templateUrl: './new-raid.component.html',
  styleUrls: ['./new-raid.component.css']
})
export class NewRaidComponent implements OnInit {

  raid: Raid;
  pokemonsGym: PokemonGym[];
  pokemons: Pokemon[];
  gyms: Gym[];

  constructor(private raidService: RaidService) {
    this.raid = new Raid();
   }

  ngOnInit() {
    this.raidService.getGym()
      .subscribe((result: Gym[]) => {
        this.gyms = result;
      });
    this.raidService.getPokemon()
      .subscribe((result: Pokemon[]) => {
        this.pokemons = result;
      });
    this.raidService.getPokemonGym()
      .subscribe((result: PokemonGym[]) => {
        this.pokemonsGym = result;
      });
  }

  createRaid() {
    console.log(this.raid);
    this.raid.meetingTime = new Date();
    this.raid.meetingTime.setTime(Date.parse(this.raid.timeToMeet.toString()));
    this.raid.meetingTime.setDate(Date.parse(this.raid.dateToMeet.toString()));
    this.raid.maxTrainners = 20;
    this.raid.timeToClose = this.raid.meetingTime;
    this.pokemonsGym.forEach(element => {
      if (element.pokemonId === this.raid.pokemonId) {
        this.raid.pokemonGymId = element.id;
      }
    });
    this.raidService.createRaid(this.raid)
      .subscribe(result => console.log(result));
  }
}
