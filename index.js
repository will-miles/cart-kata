const checkout = items => {
  if (items[0] === 'A') return 50;
  return 0;
};

module.exports = { checkout };
