import { Profile } from './Profile';
import { RaidTrainner } from './RaidTrainner';
import { PokemonGym } from './PokemonGym';
import { Gym } from './Gym';

export class Raid {
  id: number;
  pokemonGymId: number;
  gymId: number;
  dateToMeet: string;
  timeToMeet: string;
  meetingTime: Date;
  timeToClose: Date;
  timeClose: string;
  maxTrainners: number;
  pokemonGym: PokemonGym;
  gym: Gym;
  raidTrainners: RaidTrainner[];
  user: Profile;
}
