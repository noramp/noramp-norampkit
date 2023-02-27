import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { NoRampOneClick } from '../.';

const App = () => {
  return (
    <NoRampOneClick
      apiKey="API_KEY"
      appId="APP_ID"
      triggerId="TRIGGER_ID"
      currency="usd"
      triggerParams={['MINTER_ADDRESS']}
      theme="dark"
      priceInFiat={5}
      testnet
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
