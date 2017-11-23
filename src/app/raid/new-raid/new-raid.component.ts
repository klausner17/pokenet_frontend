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
  datePickerParams: [{}];
  timePickerParams: [{}];

  constructor(private raidService: RaidService) {
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
    this.raid.meetingTime = this.stringToDate(this.raid.dateToMeet, this.raid.timeToMeet);
    this.raid.maxTrainners = 20;
    this.raid.timeToClose = this.raid.meetingTime;
    for (let i = 0; i < this.pokemonsGym.length; i++) {
      if (this.pokemonsGym[i].pokemonId == this.raid.pokemonId) {
        this.raid.pokemonGymId = this.pokemonsGym[i].id;
      }
    }
    this.raidService.createRaid(this.raid)
      .subscribe(result => console.log(result));
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
    this.datePickerParams = [{
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês passado',
      labelMonthSelect: 'Selecione um mês',
      yearSelect: false,
      monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
      weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Fechar',
      closeOnSelect: true,
      format: 'dd/mm/yyyy',
      min: Date.now(),
    }];

    this.timePickerParams = [{
      twelvehour: false,
      autoClose: true,
      disable: [
        {from: [5,0], to: [21,0]}
      ],
      ok: 'Hoje',
      clear: 'Limpar',
      close: 'Cancelar',
    }]
  }
}
