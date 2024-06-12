class Head {

  constructor(headInitialState, headStartingPosition, rules) {

    this.state = headInitialState;
    this.position = parseInt(headStartingPosition);
    this.rules = JSON.parse(rules);
  }

  //Move the head
  move(direction) {

    //Move the head
    if (direction === "L") this.position--;
    else if (direction === "R") this.position++;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  getNextState() {
    return this.rules?.[this.getState()]?.[tm.tape.getValueAtHeadPosition(this.position)]?.[0];
  }

  getMovingDirection() {
    return this.rules?.[this.getState()]?.[tm.tape.getValueAtHeadPosition(this.position)]?.[2]
  }

  //Process the rules
  processRules() {

    //State halt
    if (this.getState() === "sh") return;

    //Fetch the rule-data that corresponds to the current state of the head
    const applicableRuleData = this.rules?.[this.getState()]?.[tm.tape.getValueAtHeadPosition(this.getPosition())];

    //New state
    this.setState(applicableRuleData?.[0]);

    //Write data
    tm.tape.setValueAtHeadPosition(this.position, applicableRuleData?.[1]);

    //Move head
    this.move(applicableRuleData?.[2]);
  }
}

class Tape {

  constructor(data) {
    this.data = data.split('').map(Number);
  }

  appendLeft() {
    this.data.unshift("B");
  }

  appendRight() {
    this.data.push("B");
  }

  //Append additional tape left and right as needed
  handleEdges(headPosition) {

    //If we start with a really short tape (of length 1) append a blank space on the right
    if (this.getData().length <= 1) this.appendRight();

    if (headPosition === 0) {

      this.appendLeft();

      //If we append left, we have to re-adjust the head-position
      if (tm.head.getPosition() === 0) tm.head.setPosition(tm.head.getPosition() + 1);

    }
    else if (headPosition === this.data.length - 1) {

      this.appendRight();
    }
  }

  getData() {
    return this.data;
  }

  getValueAtHeadPosition(headPosition) {
    return this.data[headPosition];
  }

  setValueAtHeadPosition(headPosition, data) {
    return this.data[headPosition] = data;
  }
}

class TuringMachine {

  constructor(_head, _tape) {
    this.head = _head;
    this.tape = _tape;
  }

  display() {

    const div = document.getElementById("display");

    //Delete the previous tables
    div.innerHTML = "";

    const headTable = document.createElement("table");
    const tapeTitle = document.createElement("p");
    const liveTape = document.createElement("table");

    // ######## Head-Table ########
    headTable.innerHTML = `
   <table>
    <tr>
      <th>Head state</th>
      <th>Next head state</th>
      <th>Head position</th>
      <th>Moving direction</th>
    </tr>
    <tr>
      
      <th>${tm.head.getState()}${tm.head.getState() === "sh" ? "🛑" : ""}</th>
      <th>${tm.head.getNextState() ?? "🛑"}</th>
      <th>${tm.head.getPosition()}</th>
      <th>${tm.head.getMovingDirection() === "L" ? "⬅️" : "➡️"}</th>
    </tr>
  </table>
  `;

    // ######## End head-table ########

    // ######## Tape-Title ########
    tapeTitle.innerHTML = "Live tape:"

    // ######## Tape-Table ########

    let headPos = "";
    let tapeBits = "";

    //Display an emoji at the head's current position over the tape-data
    for (const index in tm.tape.getData()) headPos += `<td style="font-size:30px" >${parseInt(index) === tm.head.getPosition() ? "🤖" : ""}</td>\n`;

    //Display the tape data and color the current position of the head blue
    for (const index in tm.tape.getData()) tapeBits += `<td style="font-size:30px" ${parseInt(index) === tm.head.getPosition() ? "bgcolor = 'blue'" : "bgcolor = 'black'"}>${tm.tape.getData()?.[index]}</td>\n`;

    liveTape.innerHTML = `
   <table>
    <tr>
      ${headPos}
    </tr>
    <tr>
      ${tapeBits}
    </tr>
  </table>
  `;

    // ######## End Tape - Table ########

    //Append the elements
    div.appendChild(headTable);
    div.appendChild(tapeTitle);
    div.appendChild(liveTape);
  }
}

