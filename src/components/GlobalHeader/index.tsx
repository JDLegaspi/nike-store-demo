import Flex from 'components/Flex';
import React from 'react';
import './index.scss';

interface GlobalHeaderProps {
  onCurrencyChange?: (currency: string) => void;
  selectedCurrency?: string;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  onCurrencyChange,
  selectedCurrency = 'AUD',
}) => {
  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    if (onCurrencyChange) onCurrencyChange(e.target.value);
  }

  let currencies = ['AUD', 'USD', 'JPY', 'EUR'];

  return (
    <Flex
      className="zd-global-header"
      justifyContent="flex-end"
      alignItems="center"
    >
      <div>Selected currency:</div>
      <select onChange={handleOnChange}>
        {currencies.map((currency) => (
          <option selected={selectedCurrency === currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </Flex>
  );
};

export default GlobalHeader;
