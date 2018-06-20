import { Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Gym } from '../models/Gym';
import { Raid } from '../models/Raid';
import { RaidTrainner } from '../models/RaidTrainner';
import { Pokemon } from '../models/Pokemon';

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
      .map((response: Response) => response.json());
  }

  getPokemonGym(): Observable<Pokemon[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/pokemon`, options)
      .map((response: Response) => response.json());
  }

  getGym(): Observable<Gym[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/gym`, options)
      .map((response: Response) => response.json());
  }

  createRaid(raid: Raid): Observable<Raid> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.post(`${environment.backend}/listraid`, raid, options)
      .map((response: Response) => response.json());
  }

  getRaidById(id: number): Observable<Raid> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/listRaids/${id}`, options)
      .map((response: Response) => response.json());
  }

  getRaids(): Observable<Raid[]> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.get(`${environment.backend}/listRaids/`, options)
      .map((response: Response) => response.json());
  }

  joinToRaid(idRaid: number, idTrainner: number): Observable<RaidTrainner> {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.post(`${environment.backend}/listRaid/${idRaid}/trainner/${idTrainner}`, {},  options)
      .map((response: Response) => response.json());
  }

  unjoinToRaid(idRaid: number, idTrainner: number) {
    const options: RequestOptions = new RequestOptions({headers: this.headers});
    return this.http.delete(`${environment.backend}/listRaid/${idRaid}/trainner/${idTrainner}`, options)
      .map((response: Response) => response.json());
  }

}
