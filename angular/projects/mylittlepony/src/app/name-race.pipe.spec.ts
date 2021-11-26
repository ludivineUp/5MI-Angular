import { NameRacePipe } from './name-race.pipe';
import {TestBed} from "@angular/core/testing";
import {RaceService} from "./race.service";
import {HttpClientModule} from "@angular/common/http";

describe('NameRacePipe', () => {

  it('check transform pipe',() => {
    const pipe = new NameRacePipe();
    let s: String = "toto";
    let res = pipe.transform(s);
    expect(res).toEqual('T.O.T.O.');
  })
});
