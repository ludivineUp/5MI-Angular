import { Component, OnInit } from '@angular/core';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  pony: Pony;

  constructor() { 
    this.pony = new Pony(0,"","",0);
  }

  ngOnInit(): void {
    this.pony = new Pony(0,"","",0);
  }

  onSubmit(): void{
    PONIES.push(this.pony);
  }

}
