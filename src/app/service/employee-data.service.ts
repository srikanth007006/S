import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { employ } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {


  

  private _url="https://758624c3-8662-4120-a55d-d86d8799fe39.mock.pstmn.io/emp";
  constructor(private http:HttpClient) { }
  getemp():Observable<employ[]>{

    return this.http.get<employ[]>(this._url);
}
}
