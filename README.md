# Shopping Cart Kata

## Getting started:

To clone this repo to your machine open the terminal and cd into an apropriate directory then run the comand

```
git clone https://github.com/will-miles/cart-kata.git
```

cd into this new directory and run

```
npm install
```

then, to start the program run

```
node index.js
```

to run the tests run

```
npm test
```

## The Task

You are implementing a simple checkout system, there are four products available, each with a price per unit. Some products have a special price when bought in certain quantities (e.g. 3 of product A costs 140, not 150). Implement a checkout system that allows items to be “scanned” via their Item Code, and returns the sub total when queried.

## Dataset

| Item Code | Unit Price | Special Price |
| :-------: | :--------: | :-----------: |
|     A     |     50     |   3 for 140   |
|     B     |     35     |   2 for 60    |
|     C     |     25     |               |
|     D     |     12     |               |
