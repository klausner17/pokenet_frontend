import { Profile } from './Profile';
import { RaidTrainner } from './RaidTrainner';
import { Gym } from './Gym';
import { Pokemon } from './Pokemon';

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
  pokemon: Pokemon;
  gym: Gym;
  raidTrainners: RaidTrainner[];
  user: Profile;
}
