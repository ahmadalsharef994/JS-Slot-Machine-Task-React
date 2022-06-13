### JS Slot Machine

This game contains:

1. 3 reels
2. pay-table showing the prize
3. balance indicator and inputer where balance can be input from TextBox
4. SPIN button.
5. Random button to randomize the slot reels

Each reel contain 5 Symbols [BAR3, BAR, BAR2, SEVEN, CHERRY].

The initial order of symbols can be set randomly or by default.

The game is made as 1 React functional component (App)

Each reel have "5 symbols" and a "ring" and a "moveUp".

ring indicates spinning rotation and it is a random number.
movUp indicates whether to have half rotation after spin or not (this half rotation to make Center blank).

"result" array holds each reel symbols (after spin) with its "movUp" value.
So, it will allow us locate visible symbols to calculate prize.

win() function:

When a particular win happens the winning sum on pay-table must start blinking.

I avoided using arrow functions in many cases, since they create a new function every time a component is re-rendered. We can do this by simply defining a function with the function keyword instead of using an arrow.
