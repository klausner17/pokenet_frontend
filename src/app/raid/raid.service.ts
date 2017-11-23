import { Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PokemonGym } from '../models/PokemonGym';
import { Pokemon } from '../models/Pokemon';
import { Gym } from '../models/Gym';
import { Raid } from '../models/Raid';

@Injectable()
export class RaidService {

  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    const userToken = localStorage.getItem('userToken');
    this.headers.append('Authorization', `Bearer ${userToken}`);
   }

  getPokemon(): Observable<Pokemon[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/pokemon`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        const pokemons: Pokemon[] = result;
        return pokemons;
      });
  }

  getPokemonGym(): Observable<PokemonGym[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/pokemonGym`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        const pokemonsGym = result;
        return pokemonsGym;
      });
  }

  getGym(): Observable<Gym[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/gym`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        const gyms = result;
        return gyms;
      });
  }

  createRaid(raid: Raid): Observable<Raid> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.post(`${environment.backend}/listraid`, raid, options)
      .map((response: Response) => response.json())
      .map((result) => {
        const raidCreated = result;
        return raidCreated;
      });
  }

  getRaidById(id: number): Observable<Raid> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/listRaids/${id}`, options)
      .map((response: Response) => response.json())
      .map((result) => {
        const raid = result;
        return raid;
      });
  }



}
