import React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { NoRampOneClick } from '../.';

const App = () => {
  return (
    <NoRampOneClick
      apiKey={import.meta.env.VITE_API_KEY || 'APP_ID'}
      appId={import.meta.env.VITE_APP_ID || 'APP_ID'}
      triggerId={import.meta.env.VITE_TRIGGER_ID || 'APP_ID'}
      currency="usd"
      triggerParams={[import.meta.env.VITE_MINTER_ADDRESS || 'APP_ID']}
      theme="dark"
      priceInFiat={5}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
