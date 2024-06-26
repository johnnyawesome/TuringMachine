# TuringMachine 🤖

## An interactive Turing Machine written in Javascript, HTML and CSS

![Interactive Turing Machine](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/InteractiveTuringMachine.gif?raw=true)

## What is a turing machine?

In short, it's a minimalist computer, invented in 1936 by [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing).

While minimalistic in it's design, it is in fact [Turing Complete](https://en.wikipedia.org/wiki/Turing_completeness).

In short, universal Turing Machines are amazing! Such a simplistic design that is able to compute anything that is computeable - count me in! 🤩

To learn more about Turing Machines, I highly recommend [this video](https://www.youtube.com/watch?v=dNRDvLACg5Q) by [Computerphile](https://www.youtube.com/@Computerphile).

## Code

In this project, I opted for minimalism.

Since the [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine) is a minimalist device in itself, I, too, opted for a bare-bones approach using only JavaScript, HTML and CSS for this project.

## Interactive

The [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine) I wrote is highly interactive and customizeable:

You can customize the head's 🤖 starting state and position:

![Head starting state and position](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/HeadStartingStateAndPosition.jpg?raw=true)

You can define your own, custom set of rules or you can load a pre-defined ruleset:

![Rule Set](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/Ruleset.jpg?raw=true)

You can also choose your own starting-values for the tape:

![Tape starting values](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/TapeStartingValues.jpg?raw=true)

And finally, you can adjust the calculation-speed (the time per interval for one step) of the Turing Machine:

![Calculation-Speed per step](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/CalculationSpeed.jpg?raw=true)

## Metrics

### Metrics about the head 🤖

When you run the Turing Machine, several live-metrics are displayed for the head, as well as a live-version of the tape:

![Head and tape live-metrics](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/LiveHeadAndTapeData.gif?raw=true)

From left to right, you can see various data about the head 🤖:

- The current state of the head 
- The head's next state
- The head's current position
- The direction the head will move next

### Metrics about the tape 🤖

At the bottom, there is a live-version of the tape and it's current data:

![Head and tape live-metrics](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/LiveHeadAndTapeData.gif?raw=true)

- All the data (the 0's and 1's) that are written on the tape are displayed and updated in realtime
- In the upper row, here's a small robot-head 🤖 indicating where the head of the Turing Machine is currently located above the tape
- The bottom-row shows all the data that the tape currently holds, and is updated each step
- The current field of the tape that the head is processing, is highlighted in blue

## Conclusion

I was looking forward to coding this legandary "computer before there were computers".

You'll learn a lot coding your own version of the Turing Machine, I highly recommend it!

Plus, it's just satisfying to watch it rattle up and down the tape! ☺

![Interactive Turing Machine](https://github.com/johnnyawesome/TuringMachine/blob/main/TuringMachine/DemoImages/InteractiveTuringMachine.gif?raw=true)
