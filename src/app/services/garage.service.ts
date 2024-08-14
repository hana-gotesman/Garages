import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Garage } from '../models/garage.module';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private _http: HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
});

  gatAllGarages2(city:string,area:string): Observable<any> {
    return this._http.post<any>('https://customersservices.migdal.co.il/api/experts/getgarages',{
      "City":city,
      "Area":area
   },{ headers: this.headers });
  }

  gatAllGarages(city:string): Garage[] {
    return [{
      "name": "פריים מוטורס בע\"מ",
                "type": "מוסך מורשה",
                "address": "בעלי המלאכה 6",
                "city": "חיפה",
                "phoneNumber": "04-8726111",
                "faxNumber": "04-8726115",
                "area": "צפון",
                "location": {
                    "latitude": 32.7897984,
                    "longitude": 35.0377145
                }

    },
    {
      "name": "מוסך אשדוד",
      "type": "מוסך מורשה",
      "address": "  האומנים 9",
      "city": "אשדוד",
      "phoneNumber": "03-8726111",
      "faxNumber": "024-8726115",
      "area": "דרום",
      "location": {
          "latitude": 30.7897984,
          "longitude": 31.0377145
      }

    }]

  }

  gatAllAreas2(): Observable<any> {
    return this._http.get<any>('https://front.migdal.co.il//experts/api/garageareas',{ headers: this.headers });
  }
  gatAllAreas():any {
    return ["דרום","צפון"];
  }
}

