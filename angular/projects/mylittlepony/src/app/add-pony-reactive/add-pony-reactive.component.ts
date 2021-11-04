import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PONIES } from '../mock/mock-ponies';
import { Pony } from '../pony';

@Component({
  selector: 'app-add-pony-reactive',
  templateUrl: './add-pony-reactive.component.html',
  styleUrls: ['./add-pony-reactive.component.css']
})
export class AddPonyReactiveComponent implements OnInit {

  ponyForm = this.fb.group({
    name : ['', Validators.required],
    age : [0, Validators.required],
    color : ['', Validators.required]

  });
  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() : void{
    let res: Pony;
    res = this.ponyForm.value;
    PONIES.push(res);
    this.router.navigate(['']);
  }

}
