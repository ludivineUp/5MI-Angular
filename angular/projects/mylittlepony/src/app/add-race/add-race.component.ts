import { Component, OnInit } from '@angular/core';
import {Pony} from "../pony";
import {Router} from "@angular/router";
import {PonyService} from "../pony.service";
import {Race} from "../race";
import {RaceService} from "../race.service";
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  race: Race;
  ponies: Array<Pony> = [];
  selectedPonies = [];
  randomImg = ['https://cdn-0.generatormix.com/images/little-pony/furry-heart.jpg','https://cdn-0.generatormix.com/images/little-pony/big-macintosh.jpg',
  'https://cdn-0.generatormix.com/images/little-pony/soarin\'.jpg','https://cdn-0.generatormix.com/images/little-pony/fleetfoot.jpg',
  'https://cdn-0.generatormix.com/images/little-pony/rainbow-dash.jpg','https://cdn-0.generatormix.com/images/little-pony/snails.jpg']

  constructor(private router: Router, private service: RaceService,private ponyS: PonyService,private eventEmitterService: EventEmitterService) {
    this.race = new Race(0,"",new Date());
  }

  ngOnInit(): void {
     this.ponyS.getAllPonies().subscribe(ponie => {
       this.ponies = ponie;
    });


    this.race = new Race(0,"",new Date());
  }

  onSubmit(): void {
    this.race.ponies = this.selectedPonies;
    this.service.addRace(this.race);
    this.router.navigate(['/get-race']).then(() => {
      this.eventEmitterService.onSecondComponentButtonClick();
    })
  }

}
