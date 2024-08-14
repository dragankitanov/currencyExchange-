document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;
    const resultElement = document.getElementById('result');
  
    
    const exchangeRates = {
        'USD': {'EUR': 0.85, 'GBP': 0.75},
        'EUR': {'USD': 1.18, 'GBP': 0.88},
        'GBP': {'USD': 1.33, 'EUR': 1.14}
    };
  
    if (currencyFrom === currencyTo) {
        resultElement.innerHTML = 'Please select different currencies to convert.';
        return;
    }

    const conversionRate = exchangeRates[currencyFrom][currencyTo];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    resultElement.innerHTML = `${amount} ${currencyFrom} = ${convertedAmount} ${currencyTo}`;
});
