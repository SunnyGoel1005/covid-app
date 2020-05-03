import { DailyStats } from './DailyStats';
import { TestedSamples } from './TestedSamples';
import { StateStats } from './StateStats';

export class CovidStats{
    cases_time_series : DailyStats[];
    statewise : StateStats[];
    tested : TestedSamples[];
}