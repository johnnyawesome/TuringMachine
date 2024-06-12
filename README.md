# TuringMachine

## An interactive Turing Machine written in Javascript, HTML and CSS

![Interactive Turing Machine](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/InteractiveTuringMachine.gif?raw=true)

## What is a turing machine

In short, it's a minimalist computer, invented in 1936 by [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing).

To learn more about Turing Machines, I highly recommend [This video](https://www.youtube.com/watch?v=dNRDvLACg5Q) by [Computerphile](https://www.youtube.com/@Computerphile).

## Code

In this project, I opted for minimalism.

Since the [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine) is a minimalist device in itself, I, too, opted for a bare-bones approach using only JavaScript, HTML and CSS for this project.

## Interactive

The [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine) I wrote is highly interactive and customizeable:

You can customize the head's starting state and position:

![Head starting state and position](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/HeadStartingStateAndPosition.jpg?raw=true)

You can define your own, custom set of rules or you can load a pre-defined ruleset:

![Rule Set](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/Ruleset.jpg?raw=true)

You can also choose your own starting-values for the tape:

![Tape starting values](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/TapeStartingValues.jpg?raw=true)

And finally, you can adjust the calculation-speed (the time per interval for one step) of the Turing Machine:

![Calculation-Speed per step](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/CalculationSpeed.jpg?raw=true)

## Metrics

When you run the Turing Machine, several live-metrics are displayed for the head as well as a live-version of the tape:

![Head and tape live-metrics](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/LiveHeadAndTapeData.gif?raw=true)

From left to right, you can see various data about the head:

- The current state of the head
- The head's next state
- The head's current position
- The direction the head will move next

Also, there is a live-version of the tape:

![Head and tape live-metrics](https://github.com/johnnyawesome/TuringMachine/blob/main/Turing%20Machine/DemoImages/LiveHeadAndTapeData.gif?raw=true)

- The tape is updated in realtime
- There's a small robot-head indicating where the head is currently located
- The current field that the head is processing is highlighted in blue
