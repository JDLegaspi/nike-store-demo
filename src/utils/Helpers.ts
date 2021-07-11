export function getPriceRounded(price: number) {
  return (Math.round(price * 100) / 100).toFixed(2);
}

export function getCurrencyString(currency: string): string {
  let currencyString = '$';

  if (currency === 'AUD') {
    currencyString = 'A$';
  }

  return currencyString;
}
