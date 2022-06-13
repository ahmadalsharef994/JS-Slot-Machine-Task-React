### JS Slot Machine Game using React.js and CSS

This game contains:

1. 3 reels
2. pay-table showing the prize
3. balance indicator and inputer where balance can be input from TextBox
4. SPIN button.
5. Random button to randomize the slot reels

Each reel contain 5 Symbols with the following order by default: [BAR3, BAR, BAR2, SEVEN, CHERRY].

The initial order of symbols for all reels can be set randomly or by default.

Each reel have "5 symbols" and a "ring" and a "moveUp".

    "Ring" indicates spinning rotations of reel (random number).
    "moveUp" indicates whether to have half rotation after spin (this half rotation to make Center blank).

"spinSymbols" function takes the current order of symbols and a ring, and returns the new order after spinning.

"spinResult" array holds each reel symbols (after spin) with its "moveUp" value. So, it will allow us locate visible symbols to calculate prize.

"randomizeArea" will set a random order of symbols in reels other than the default order .

## play() function:
    Triggers Spin. Sets rings, moveUps, and balance.
    The spinning lasts 2 seconds, after that reels start to sop one by one (starting from left) having 0.5
    sec delay between landings.
    Finally, it calls win() function to calculate prize and win-lines

## win() function:

    When a particular win happens the winning sum on pay-table must start blinking.
    win() function calculates the prize depending on spinResult array that holds the final order of symbols and moveUp values.
    win() function only consider the contents of first 3 symbols of each reel (TOP, CENTER, BOTTOM).
    win() function also stores the winning lines (TOP, CENTER, BOTTOM) in winLines state

SlotFoot functional component contains play(), rand(), getBalanceInput(), and payTable() functionality. These nested functions provide capabilities to create private variables and make the code more encapsulated.

The game is made as 1 React functional component (App).
The game avoided using arrow functions in many cases, since they create a new function every time a component is re-rendered. I avoided this by simply defining a function with the function keyword instead of using an arrow.

Requirements not satisfied yet:

1. Drawing a red line above win-lines on reel
2. Setting initial symbols on reels MANUALLY
