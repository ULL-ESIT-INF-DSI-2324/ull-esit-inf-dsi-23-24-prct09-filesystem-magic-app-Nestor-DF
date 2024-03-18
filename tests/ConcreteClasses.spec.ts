import 'mocha';
import { expect } from 'chai';
import {
  FilterMapAddReduce,
  FilterMapSubReduce,
  FilterMapProdReduce,
  FilterMapDivReduce,
} from '../src/ejercicio-pe/ConcreteClasses.js';

describe('FilterMapAddReduce', () => {
  it('should work 1', () => {
    const filterMapAddReduce: FilterMapAddReduce = new FilterMapAddReduce();
    expect(
      filterMapAddReduce.run(
        [1, 2, 3, 4, 5],
        (a) => a > 0,
        (b) => b + 1,
      ),
    ).to.be.equal(20);
  });

  it('should work 2', () => {
    const filterMapAddReduce: FilterMapAddReduce = new FilterMapAddReduce();
    expect(
      filterMapAddReduce.run(
        [-1, -2, -3, -4, -5],
        (a) => a > 0,
        (b) => b + 1,
      ),
    ).to.be.equal(0);
  });
});

describe('FilterMapSubReduce', () => {
  it('should work 1', () => {
    const filterMapSubReduce: FilterMapSubReduce = new FilterMapSubReduce();
    expect(
      filterMapSubReduce.run(
        [1, 2, 3, 4, 5],
        (a) => a > 0,
        (b) => b + 1,
      ),
    ).to.be.equal(-20);
  });

  it('should work 2', () => {
    const filterMapSubReduce: FilterMapSubReduce = new FilterMapSubReduce();
    expect(
      filterMapSubReduce.run(
        [-1, -2, -3, -4, -5],
        (a) => a > -2,
        (b) => b + 1,
      ),
    ).to.be.equal(0);
  });
});
