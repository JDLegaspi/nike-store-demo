// Helper function that outputs decimans to 2 decimal places with trailing 0s
export function getPriceRounded(price: number) {
  return (Math.round(price * 100) / 100).toFixed(2);
}

// Helper function that gets the currency and appends the corresponding currency symbols
// Only supporting a few currencies for illustrative purposes
// Params: Currency (string), eg "USD", "AUD", etc
export function getCurrencyString(currency: string): string {
  let currencyString = '$';

  switch (currency) {
    case 'AUD':
      currencyString = 'A$';
      break;
    case 'JPY':
      currencyString = 'JP¥';
      break;
    case 'EUR':
      currencyString = '€';
  }

  return currencyString;
}
