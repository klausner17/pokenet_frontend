import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RaidService } from '../raid.service';
import { Raid } from '../../models/Raid';
import { PokemonGym } from '../../models/PokemonGym';
import { Pokemon } from '../../models/Pokemon';
import { Gym } from '../../models/Gym';

@Component({
  selector: 'app-new-raid',
  templateUrl: './newraid.component.html',
  styleUrls: ['./newraid.component.css']
})
export class NewRaidComponent implements OnInit {

  raid: Raid;
  pokemonsGym: PokemonGym[];
  pokemons: Pokemon[];
  gyms: Gym[];
  datePickerParams: [{}];
  timePickerParams: [{}];

  constructor(private raidService: RaidService, private router: Router) {
    this.raid = new Raid();
    this.inicializarParams();
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
    this.raid.meetingTime = this.stringToDate(undefined, this.raid.timeToMeet);
    this.raid.timeToClose = this.stringToDate(undefined, this.raid.timeClose);
    this.raid.maxTrainners = 20;
    for (let i = 0; i < this.pokemonsGym.length; i++) {
      if (this.pokemonsGym[i].pokemonId == this.raid.pokemonId) {
        this.raid.pokemonGymId = this.pokemonsGym[i].id;
      }
    }
    this.raidService.createRaid(this.raid)
      .subscribe((result: Raid) => {
        this.router.navigate([`/raid/${result.id}`]);
      });
  }

  stringToDate(dateStr?: string, timeStr?: string): Date {
    let fullDate: Date = new Date();
    let datePieces: number[];
    if (dateStr) {
      let pieces: string[] = dateStr.split('/');
      fullDate = new Date(Number.parseInt(pieces[2]),
        Number.parseInt(pieces[1]) - 1,
        Number.parseInt(pieces[0]));
    }
    if (timeStr) {
      let pieces: string[] = timeStr.split(':');
      fullDate.setHours(Number.parseInt(pieces[0]));
      fullDate.setMinutes(Number.parseInt(pieces[1]));
    }
    console.log(fullDate);
    return fullDate;
  }

  inicializarParams() {
    this.timePickerParams = [{
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'limpar', // text for clear-button
      canceltext: 'cancelar', // Text for cancel-button
      autoclose: true, // automatic close timepicker
      ampmclickable: false, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
    }]
  }
}
