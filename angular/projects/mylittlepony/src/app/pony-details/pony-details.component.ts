import { Component, Input, OnInit } from '@angular/core';
import { Pony } from '../pony';

@Component({
  selector: 'pony-details',
  template: `
    <div class="card mb-2" style="width: 18rem;">
      <img class="card-img-top" src="https://cdn-0.generatormix.com/images/little-pony/soarin'.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{pony.name | titlecase}}</h5>
        <p class="card-text">Le cheval est de couleur {{pony.color}} et est âgé de {{pony.age}}.</p>
        <button routerLink="/add-pony/{{pony.id}}"  class="btn btn-primary">Modifier</button>
      </div>
    </div>
  `,
  // pas de fichier css lié
  styleUrls: []
})
export class PonyDetailsComponent implements OnInit {

  // pony devient un attribut du tag pony-details
  @Input() pony: Pony = new Pony();

  constructor() { }

  ngOnInit(): void {
  }

}
