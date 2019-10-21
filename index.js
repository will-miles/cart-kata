const checkout = items => {
  possibleItems = { A: 50, B: 35, C: 25, D: 12 };

  if (possibleItems.hasOwnProperty(items[0])) return possibleItems[items[0]];
  return 0;
};

module.exports = { checkout };
