import { State } from './State';
import { District } from './District';

export class StateStats{
    active: number;
    confirmed: number;
    deaths: number;
    deltaconfirmed: number;
    deltadeaths: number;
    deltarecovered: number;
    lastupdatedtime: Date;
    recovered: number;
    state: string;
    statecode: string;
    statenotes: string;
    districtData : District[];
}