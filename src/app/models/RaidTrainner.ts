import { User } from './User';
import { Trainner } from './Trainner';

export class RaidTrainner {
  trainnerId: number;
  raidId: number;
  trainner?: Trainner;
  user: User;
}
