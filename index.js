const checkout = items => {
  const possibleItems = { A: 50, B: 35, C: 25, D: 12 };
  let total = 0;

  items.forEach(item => {
    if (possibleItems.hasOwnProperty(item)) total += possibleItems[item];
  });

  return total;
};

module.exports = { checkout };
