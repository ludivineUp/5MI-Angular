import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  pony: Pony;

  constructor(private router: Router, private service: PonyService) { 
    this.pony = new Pony(0,"","",0);
  }

  ngOnInit(): void {
    this.pony = new Pony(0,"","",0);
  }

  onSubmit(): void{
    //PONIES.push(this.pony);
    this.service.addPony(this.pony);
    this.router.navigate(['/'])
  }

}
