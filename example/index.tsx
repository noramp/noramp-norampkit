import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NoRampOneClick } from '../.';

const App = () => {
  return (
    <div>
      <NoRampOneClick
        apiKey={process.env.API_KEY as string}
        appId={process.env.APP_ID as string}
        triggerId={process.env.TRIGGER_ID as string}
        currency="usd"
        triggerParams={['0x2184d6a4Fbd26584eb4FF90a215C1DB334209053']}
        priceInFiat={5}
        production={true}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
