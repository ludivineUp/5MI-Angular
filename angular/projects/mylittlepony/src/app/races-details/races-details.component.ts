import {Component, Input, OnInit} from '@angular/core';
import {Pony} from "../pony";
import {Race} from "../race";


@Component({
  selector: 'race-details',
  template: `
    <div class="card mb-2" style="width: 18rem;">
      <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{race.location | nameRace}}</h5>
        <p class="card-text">La course aura lieu le  {{race.date}} les chevaux participants seront :

        </p>
        <ul>
          <li *ngFor="let poney of race.ponies"> {{poney.name}}| {{poney.color}}| {{poney.age}}</li>
        </ul>
        <button routerLink="/add-pony/{{race}}"  class="btn btn-primary mt-2">Modifier</button>
      </div>
    </div>
  `,
  // pas de fichier css lié
  styleUrls: []
})
export class RacesDetailsComponent implements OnInit {

  // pony devient un attribut du tag pony-details
  @Input() race: Race = new Race();

  constructor() { }


  ngOnInit(): void {
  }

}
