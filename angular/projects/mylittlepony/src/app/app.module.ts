import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies-component/ponies-component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { NameRacePipe } from './name-race.pipe';
import { MenuComponent } from './menu/menu.component';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddPonyReactiveComponent } from './add-pony-reactive/add-pony-reactive.component';

const ROUTES : Routes = [
  {path: '', component: PoniesComponent},
  {path: 'add-pony', component: AddPonyComponent},
  {path: 'add-pony2', component: AddPonyReactiveComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyDetailsComponent,
    NameRacePipe,
    MenuComponent,
    AddPonyComponent,
    AddPonyReactiveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
