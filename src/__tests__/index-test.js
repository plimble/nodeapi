import { assert } from 'chai';
import { Point } from '../point';

describe('Point', () => {
  it('sets up instance properties correctly', () => {
    const p = new Point(1, 5);
    console.log(JSON.stringify(p));
    assert.equal(1, p.x);
    assert.equal(5, p.y);
  });
});
