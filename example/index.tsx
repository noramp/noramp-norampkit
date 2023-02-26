import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NoRampOneClick } from '../.';

const App = () => {
  return (
    <div>
      <NoRampOneClick
        apiKey="API_KEY"
        appId="APP_ID"
        triggerId="TRIGGER_ID"
        currency="usd"
        triggerParams={['MINTER_ADDRESS']}
        priceInFiat={5}
        production={true}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
