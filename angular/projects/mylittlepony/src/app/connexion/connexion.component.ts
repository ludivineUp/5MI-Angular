import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    sessionStorage.setItem('connected','true')
    this.eventEmitterService.onThirdComponentButtonClick();
    this.router.navigate(['/'])
  }

}
