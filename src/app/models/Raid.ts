import { RaidTrainner } from './RaidTrainner';
import { PokemonGym } from './PokemonGym';
import { Pokemon } from './Pokemon';
import { Gym } from './Gym';
import { Profile } from 'selenium-webdriver/firefox';

export class Raid {
  id: number;
  dateToMeet: string;
  timeToMeet: string;
  meetingTime: Date;
  timeToClose: Date;
  timeClose: string;
  maxTrainners: number;
  pokemonGym: PokemonGym;
  pokemon: Pokemon;
  gym: Gym;
  raidTrainners: RaidTrainner[];
  user: Profile[];
}
