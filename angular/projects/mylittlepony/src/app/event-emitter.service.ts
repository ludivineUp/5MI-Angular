import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();
  invokeSecondComponentFunction = new EventEmitter();
  invokeThirdComponentFunction = new EventEmitter();
  subsVar: Subscription | undefined;

  constructor() { }
  onFirstComponentButtonClick() {
    this.invokeFirstComponentFunction.emit();
  }
  onSecondComponentButtonClick() {
    this.invokeSecondComponentFunction.emit();
  }
  onThirdComponentButtonClick() {
    this.invokeThirdComponentFunction.emit();
  }
}
