alert(extractCurrencyValue('$120') === 120);

function extractCurrencyValue(money) {
  return +money.slice(1);
}