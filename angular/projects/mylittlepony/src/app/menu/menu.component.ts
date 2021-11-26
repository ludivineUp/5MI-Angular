import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  connected = Boolean(sessionStorage.getItem('connected'));
  constructor(private router: Router,private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeThirdComponentFunction.subscribe((name:string) => {
        this.connected = true;
      });
    }
  }
  disconnect(){
    sessionStorage.removeItem('connected');
    this.connected = false;
    this.router.navigateByUrl('/');
  }

}
