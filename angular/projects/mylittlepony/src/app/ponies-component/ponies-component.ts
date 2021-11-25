import { Component, OnInit } from '@angular/core';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

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
  constructor(private service : PonyService) {
    //this.ponies = PONIES;
    //this.service.getAllPonies().subscribe(p => this.ponies = p);
  }

  // appelé à chaque affichage du composant
  ngOnInit(): void {
    this.service.getAllPonies().subscribe(
      p => {
        console.log("sub");
        this.ponies = p;
    });
  }

}
