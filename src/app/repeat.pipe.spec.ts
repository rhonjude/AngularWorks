import { pipe } from 'rxjs';
import { RepeatPipe } from './repeat.pipe';

describe('RepeatPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatPipe();
    expect(pipe).toBeTruthy();
  });
  it('repeat test',()=>{
    const pipe = new RepeatPipe();
    expect(pipe.transform('nn',2)).toBe('nnnn');
  })
});
