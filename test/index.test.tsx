import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NoRampOneClick } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NoRampOneClick
        apiKey=""
        appId=""
        triggerId=""
        currency="usd"
        triggerParams={['']}
        priceInFiat={5}
        testnet
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
