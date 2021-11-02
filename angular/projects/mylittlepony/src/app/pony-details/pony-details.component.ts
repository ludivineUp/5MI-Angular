import { Component, Input, OnInit } from '@angular/core';
import { Pony } from '../pony';

@Component({
  selector: 'pony-details',
  templateUrl: './pony-details.component.html',
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
