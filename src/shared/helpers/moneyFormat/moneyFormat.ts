import wNumb from 'wnumb';

const moneyFormat = wNumb({
  decimals: 0,
  thousand: ' ',
  suffix: '₽',
});

export { moneyFormat };
