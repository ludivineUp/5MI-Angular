import { Component, OnInit } from '@angular/core';
import {Pony} from "../pony";
import {PonyService} from "../pony.service";
import {Race} from "../race";
import {RaceService} from "../race.service";
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races : Array<Race> = [];
  loader = true;

  // appelé une fois à la création du composant
  constructor(private service : RaceService, private eventEmitterService: EventEmitterService) {
  }

  // appelé à chaque affichage du composant
  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeSecondComponentFunction.subscribe((name:string) => {
        this.ngOnInit();
      });
    }
    this.service.getAllRaces().subscribe(
      p => {
        console.log("sub");
        this.races = p;
        this.loader = false;
      });
  }

}
