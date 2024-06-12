function loadOneIncrementRules() {

  document.getElementById("ruleset").value = JSON.stringify({
    "s1": {
      "0": ["s1", "0", "R"],
      "1": ["s1", "1", "R"],
      "B": ["s2", "B", "L"]
    },
    "s2": {
      "0": ["s3", "1", "L"],
      "1": ["s2", "0", "L"],
      "B": ["s3", "1", "L"]
    },
    "s3": {
      "0": ["s3", "0", "L"],
      "1": ["s3", "1", "L"],
      "B": ["sh", "B", "R"]
    }
  });
}

function loadInfiniteIncrementRules() {

  document.getElementById("ruleset").value = JSON.stringify({
    "s1": {
      "0": ["s1", "0", "R"],
      "1": ["s1", "1", "R"],
      "B": ["s2", "B", "L"]
    },
    "s2": {
      "0": ["s3", "1", "L"],
      "1": ["s2", "0", "L"],
      "B": ["s3", "1", "L"]
    },
    "s3": {
      "0": ["s3", "0", "L"],
      "1": ["s3", "1", "L"],
      "B": ["s1", "B", "R"]
    }
  });
}

function loadBusyBeaverOneRules() {

  //Busy Beavers start with an empty tape
  document.getElementById("startingtape").value = 0;

  document.getElementById("ruleset").value = JSON.stringify({
    "s1": {
      "0": ["s2", "1", "R"],
      "1": ["sh", "1", "R"],
      "B": ["s2", "1", "R"],
    },
    "s2": {
      "0": ["s3", "0", "R"],
      "1": ["s2", "1", "R"],
      "B": ["s3", "0", "R"],
    },
    "s3": {
      "0": ["s3", "1", "L"],
      "1": ["s1", "1", "L"],
      "B": ["s3", "1", "L"],
    }
  });
}

function loadBusyBeaverTwoRules() {

  //Busy Beavers start with an empty tape
  document.getElementById("startingtape").value = 0;

  document.getElementById("ruleset").value = JSON.stringify({
    "s1": {
      "0": ["s2", "1", "R"],
      "1": ["s3", "1", "R"],
      "B": ["s2", "1", "R"],
    },
    "s2": {
      "0": ["s3", "1", "L"],
      "1": ["sh", "1", "R"],
      "B": ["s3", "1", "L"],
    },
    "s3": {
      "0": ["s1", "1", "R"],
      "1": ["s2", "0", "L"],
      "B": ["s1", "1", "R"],
    }
  });
}