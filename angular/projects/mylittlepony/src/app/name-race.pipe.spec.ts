import { NameRacePipe } from './name-race.pipe';

describe('NameRacePipe', () => {
  it('create an instance', () => {
    const pipe = new NameRacePipe();
    expect(pipe).toBeTruthy();
  });
  it('check transform pipe', () =>{
    const pipe = new NameRacePipe();
    let s: String = 'toto';
    let res = pipe.transform(s);
    expect(res).toEqual('T.O.T.O.');
  })
});
