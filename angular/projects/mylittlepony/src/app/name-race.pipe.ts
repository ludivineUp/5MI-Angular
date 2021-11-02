import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameRace'
})
export class NameRacePipe implements PipeTransform {
  
  // appel dans le html {{race.location | nameRace }}
  // Rouen => R.O.U.E.N.
  transform(location: String, ...args: unknown[]): String {
    let res : String = "";
    location = location.toUpperCase();
    for(let c of location){
      res += c + ".";
    }
    return res;
  }

}
