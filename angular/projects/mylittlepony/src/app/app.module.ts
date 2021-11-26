import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies-component/ponies-component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { NameRacePipe } from './name-race.pipe';
import { MenuComponent } from './menu/menu.component';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddPonyReactiveComponent } from './add-pony-reactive/add-pony-reactive.component';
import { PonyService } from './pony.service';
import { AddRaceComponent } from './add-race/add-race.component';
import { RacesComponent } from './races/races.component';
import { RacesDetailsComponent } from './races-details/races-details.component';
import {MultiSelectModule} from "primeng/multiselect";
import {PickListModule} from "primeng/picklist";
import { ConnexionComponent } from './connexion/connexion.component';
import {AuthguardGuard} from "./authguard.guard";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES : Routes = [
  {path: '', component: PoniesComponent},
  {path: 'add-pony', component: AddPonyComponent},
  {path: 'add-pony/:id', component: AddPonyComponent},
  {path: 'add-pony2', component: AddPonyReactiveComponent},
  {path: 'add-race', component: AddRaceComponent,canActivate:[AuthguardGuard]},
  {path: 'get-race', component: RacesComponent},
  {path: 'connexion', component: ConnexionComponent},
  { path: '**', pathMatch: 'full',
    component: PageNotFoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyDetailsComponent,
    NameRacePipe,
    MenuComponent,
    AddPonyComponent,
    AddPonyReactiveComponent,
    AddRaceComponent,
    RacesComponent,
    RacesDetailsComponent,
    ConnexionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MultiSelectModule,
    PickListModule
  ],
  providers: [
    PonyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
