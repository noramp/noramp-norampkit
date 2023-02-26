import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NoRampPayButton } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NoRampPayButton
        apiKey=""
        appId=""
        triggerId=""
        currency="usd"
        triggerParams={['']}
        priceInFiat={5}
        production={false}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
