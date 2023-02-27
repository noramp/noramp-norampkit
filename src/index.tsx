import * as React from 'react';
import './NoRampStyle.css';

export interface NoRampPrice {
  id: string;
}

export interface NoRampProps {
  apiKey: string;
  appId: string;
  triggerId: string;
  triggerParams: [string];
  priceInFiat: number;
  currency: 'usd';
  testnet: boolean;
  theme: 'dark' | 'light';
}

export const NoRampOneClick = ({
  apiKey,
  appId,
  triggerId,
  triggerParams,
  priceInFiat,
  currency,
  testnet,
  theme,
}: NoRampProps) => {
  const [price, setPrice] = React.useState<NoRampPrice | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const apiEndpoint = testnet
    ? 'https://testnet.noramp.io'
    : 'https://api.noramp.io';

  const embedUrl = testnet
    ? 'https://testnet.on-noramp.com'
    : 'https://on-noramp.com';

  const createPrice = async () => {
    setLoading(true);
    const data = {
      currency: currency,
      trigger_id: triggerId,
      trigger_data: {
        params_data: triggerParams,
      },
      amount: priceInFiat,
    };

    try {
      const response = await fetch(`${apiEndpoint}/prices/${appId}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      setPrice(json.data);
    } catch (error) {
      setError('Error');
    }
    setLoading(false);
  };

  if (price) {
    <div>
      <iframe
        src={`${embedUrl}/embed/payments/${appId}?device=desktop&theme=${theme}&price_id=${price.id}`}
        height="180"
        width="450"
      />
    </div>;
  }

  return (
    <div>
      <button className="createPriceButton" type="button" onClick={createPrice}>
        {loading ? (
          <>
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <>{error ? <span>{error}</span> : <span>Buy with NoRamp</span>}</>
        )}
      </button>
    </div>
  );
};
