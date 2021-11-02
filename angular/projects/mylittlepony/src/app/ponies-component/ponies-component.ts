import { Component, OnInit } from '@angular/core';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';

@Component({
  // nom de la balise du composant
  selector: 'ponies-list',
  // nom du fichier html du composant
  templateUrl: './ponies-component.html',
  // css du composant, si pas besoin de css local : liste vide
  styleUrls: ['./ponies-component.css']
})
export class PoniesComponent implements OnInit {
  
  ponies : Array<Pony> = [];
  
  // appelé une fois à la création du composant
  constructor() {
    this.ponies = PONIES;
  }

  // appelé à chaque affichage du composant
  ngOnInit(): void {
  }

}
