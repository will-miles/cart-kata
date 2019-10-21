const standard_input = process.stdin;
standard_input.setEncoding('utf-8');
const { checkout, possibleItemsArr } = require('./utils/utils.js');

const scannedItems = [];

console.log(
  `Welcome to the checkout.\n\nPlease scan your first item by typing in the code and pressing 'enter'.
The availabe items are: ${possibleItemsArr}\n\nWhen you have finished scanning input '.'`
);

standard_input.on('data', function(data) {
  if (data === '.\n') {
    // display total cost and close program
    console.log('\n\nTotal cost = ' + checkout(scannedItems));
    process.exit();
  } else {
    // if a viable item add to the scanned items array
    if (possibleItemsArr.indexOf(data[0]) !== -1) {
      scannedItems.push(data[0]);
      console.log(
        'Cart : ' + scannedItems + '\nScan your next item. (`.`) to finish\n'
      );
    } else {
      console.log('Sorry that item is not available. try again\n');
    }
  }
});
