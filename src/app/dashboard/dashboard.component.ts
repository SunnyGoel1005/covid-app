import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../services/dashboard.service';
import { CovidStats } from '../model/CovidStats';
import { StateStats } from '../model/StateStats';
import { State } from '../model/State';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  covidStatsData: CovidStats;
  totalCases : number;
  deaths : number;
  recovered : number;
  stateData : StateStats[];
  stateHeadElements = ['State', 'Active Cases', 'Confirmed Cases', 'Deaths', 'Recovered'];
  districtData : State;

  constructor(private dashboardService: DashBoardService) { }
 
  

  ngOnInit(){
    this.getCovidData();
    this.getDistrictData();
  }

  public getCovidData(){
    this.dashboardService.getStatisticData()
    .subscribe((data: CovidStats) => {
      this.covidStatsData = data;
      this.setData();
    });
  }

  setData() {
    let latestCasesdata = this.covidStatsData.cases_time_series[this.covidStatsData.cases_time_series.length-1];
    this.totalCases = latestCasesdata.totalconfirmed;
    this.deaths = latestCasesdata.totaldeceased;
    this.recovered = latestCasesdata.totalrecovered;
    this.stateData = this.covidStatsData.statewise.splice(1,this.covidStatsData.statewise.length-1);
    this.stateData.push(this.covidStatsData.statewise[0]);
  }

  getDistrictData(){
    this.dashboardService.getDistrictData()
    .subscribe((data: State) => {
      for(let state of this.stateData){
        let districts=[];
       if(!(data[state.state] === undefined) && !(data[state.state].districtData === undefined)){
          Object.keys(data[state.state].districtData).map(function(key){  
            districts.push({name: [key], info:data[state.state].districtData[key]})  
            return districts;  
        }); 
       }
        state.districtData = districts;
      }
      });
  }
}
