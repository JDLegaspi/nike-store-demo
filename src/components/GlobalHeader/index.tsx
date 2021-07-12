import Flex from 'components/Flex';
import Wrapper from 'components/Wrapper';
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
    <Flex className="zd-global-header">
      <Wrapper>
        <Flex justifyContent="flex-end" alignItems="center">
          <div className="zd-currency-select-label">Selected currency:</div>
          <select onChange={handleOnChange} value={selectedCurrency}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default GlobalHeader;
