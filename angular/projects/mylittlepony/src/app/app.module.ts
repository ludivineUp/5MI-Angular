import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies-component/ponies-component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { NameRacePipe } from './name-race.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyDetailsComponent,
    NameRacePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
