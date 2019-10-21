const checkout = items => {
  const possibleItems = { A: 50, B: 35, C: 25, D: 12 };
  const discountNums = { A: 3, B: 2 };
  const discountPrices = { A: 140, B: 60 };
  let total = 0;

  // Create object with numbers of each item scanned
  const totalItems = items.reduce((acc, val) => {
    if (acc[val]) acc[val]++;
    else acc[val] = 1;
    return acc;
  }, {});

  // Create array of discountable items
  const discountedItemsArr = Object.keys(discountNums);

  // Calculate costs of discountable items and add to total
  discountedItemsArr.forEach(item => {
    while (totalItems[item] >= discountNums[item]) {
      total += discountPrices[item];
      totalItems[item] -= discountNums[item];
    }
  });

  // Create array of all items
  const possibleItemsArr = Object.keys(possibleItems);

  // Add remaining item's costs to total
  possibleItemsArr.forEach(item => {
    if (totalItems[item]) {
      total += totalItems[item] * possibleItems[item];
    }
  });

  return total;
};

module.exports = { checkout };
