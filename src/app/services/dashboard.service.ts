import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class DashBoardService{

    private statsUrl = 'https://api.covid19india.org/data.json';
    private districtDataUrl = 'https://api.covid19india.org/state_district_wise.json';
 
    constructor(
      private http: HttpClient) { }

    getStatisticData(){
      return this.http.get(this.statsUrl);
    }
    getDistrictData(){
      return this.http.get(this.districtDataUrl);
    }
}