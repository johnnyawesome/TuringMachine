let tm = null;

function main() {


  //Starting values
  const headInitialState = document.getElementById("startingstate")?.value;
  const headStartingPosition = document.getElementById("startingposition")?.value;
  const ruleset = document.getElementById("ruleset")?.value;
  const startingtape = document.getElementById("startingtape")?.value;

  //Build the Turing machine
  head = new Head(headInitialState, headStartingPosition, ruleset, startingtape);
  tape = new Tape(startingtape);

  //Create an Turing machine instance
  tm = new TuringMachine(head, tape);

  //Start the Turing machine
  step();
}

//Perform one step
function step() {

  //Handle tape-edges (Append additional tape as needed)
  tm.tape.handleEdges(tm.head.getPosition());

  //Process rules
  tm.head.processRules();

  //Display various data about the head and show a live-tape
  tm.display();

  //Call step() again after the interval set by the calculation-speed slider
  setTimeout(step, document.getElementById("calcSpeed")?.value);
}
