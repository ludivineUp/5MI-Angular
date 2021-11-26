import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pony} from "./pony";
import {Race} from "./race";

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url = 'https://ludivinecrepin.fr/api/';
  httpsOption ={
    headers: new HttpHeaders({
      'Content-type' :'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAllRaces(): Observable<Array<Race>>{
    return this.http.get<Array<Race>>(this.url+'race-get.php', this.httpsOption);
  }
  getRace(id: number): Observable<Race>{
    return this.http.get<Race>(this.url+'race-get-id.php/'+id, this.httpsOption);
  }
  addRace(p: Race): void{
    this.http.post<Race>(this.url + 'race-add.php', p, this.httpsOption).subscribe();
  }
}
