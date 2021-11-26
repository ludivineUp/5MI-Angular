import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';
import {first} from 'rxjs/operators';
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  pony: Pony;
  id: string = '';
  addMode: boolean = true;
  constructor(private router: Router, private service: PonyService,private route: ActivatedRoute,    private eventEmitterService: EventEmitterService
  ) {
    this.pony = new Pony(0,"","",0);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addMode = !this.id;
    this.pony = new Pony(0,"","",0);
    if(!this.addMode){
      this.service.getPony(parseInt(this.id))
        .pipe(first())
        .subscribe(x => this.pony = x);
    }
  }

  onSubmit(): void{
    //PONIES.push(this.pony);
    if(this.addMode){
    this.service.addPony(this.pony);
    }else{
      this.service.updatePony(this.pony);
    }
    this.router.navigate(['/']).then(() => {
      this.eventEmitterService.onFirstComponentButtonClick();

    })
  }

}
