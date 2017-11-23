import { RaidTrainner } from './RaidTrainner';
import { PokemonGym } from './PokemonGym';
import { Pokemon } from './Pokemon';
import { Gym } from './Gym';

export class Raid {
  pokemonId: number;
  pokemonGymId: number;
  gymId: number;
  dateToMeet: string;
  timeToMeet: string;
  meetingTime: Date;
  timeToClose: Date;
  maxTrainners: number;
  pokemonGym: PokemonGym;
  pokemon: Pokemon;
  gym: Gym;
  raidTrainners: RaidTrainner[];
}
