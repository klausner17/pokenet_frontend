import { Profile } from './Profile';
import { RaidTrainner } from './RaidTrainner';
import { PokemonGym } from './PokemonGym';
import { Pokemon } from './Pokemon';
import { Gym } from './Gym';

export class Raid {
  id: number;
  pokemonId: number;
  pokemonGymId: number;
  gymId: number;
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
  user: Profile;
}
