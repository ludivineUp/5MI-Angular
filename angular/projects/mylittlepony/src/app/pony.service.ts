import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Pony } from './pony';


@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url = 'https://ludivinecrepin.fr/api/';
  httpsOption ={
    headers: new HttpHeaders({
      'Content-type' :'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAllPonies(): Observable<Array<Pony>>{
    console.log("service");
    return this.http.get<Array<Pony>>(this.url+'pony-get.php', this.httpsOption);
  }
  getPony(id: number): Observable<Pony>{
    console.log("service");
    return this.http.get<Pony>(this.url+'pony-get-id.php/'+id, this.httpsOption);
  }
  addPony(p: Pony): void{
    this.http.post<Pony>(this.url + '/pony-add.php', p, this.httpsOption).subscribe();
  }
}
