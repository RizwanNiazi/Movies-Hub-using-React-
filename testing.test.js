import { describe } from 'riteway';
import render from 'riteway/render-component';
import React from 'react';
import ClickCounter from '../components/DeleteButton.jsx';
describe('DeleteButton component', async assert => {
  const createCounter = clickCount =>
    render(<ClickCounter clicks={ clickCount } />)
  ;
  {
    const count = 3;
    const $ = createCounter(count);
    assert({
      given: 'a click count',
      should: 'render the correct number of clicks.',
      actual: parseInt($('.clicks-count').html().trim(), 10),
      expected: count
    });
  }
  {
    const count = 5;
    const $ = createCounter(count);
    assert({
      given: 'a click count',
      should: 'render the correct number of clicks.',
      actual: parseInt($('.clicks-count').html().trim(), 10),
      expected: count
    });
  }
});

describe('click counter reducer', async assert => {
    assert({
      given: 'no arguments',
      should: 'return the valid initial state',
      actual: reducer(),
      expected: 0
    });
  });

  const click = () => {};
  const reducer = () => {};
  export { reducer, click };


  