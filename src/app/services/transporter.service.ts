import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Transporter} from "../models/transporter/transporter";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  private api = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>(`${this.api}/transporters`);
  }

  insert(transp: Transporter): Observable<Object> {
    return this.http.post<any>(`${this.api}/transporters`, transp);
  }

  update(transp: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.api}/transporters/${id}`, transp);
  }

  delete(id:number): Observable<any> {
    return this.http.delete<any>(`${this.api}/transporters/${id}`);
  }

  findTransporters(id: string): Observable<Transporter> {
    return this.http.get(`${this.api}/transporters/${id}`).pipe(map(value => {
      let transporterList = [];
      console.log(value);
      transporterList.push(new Transporter(
        value['id'],
        value['email'],
        value['name'],
        value['company'],
        value['phone'],
        value['modal'],
        value['street'],
        value['number'],
        value['neighbourhood'],
        value['city'],
        value['uf']
      ));

      if (transporterList.length == 0) {
        return undefined;
      }
      return transporterList[0];
    }));
  }

  findUfs(): Observable<any> {
    return this.http.get<any>(`${this.api}/transporters/ufs`);
  }

  findCities(): Observable<any> {
    return this.http.get<any>(`${this.api}/transporters/cities`);
  }

}
