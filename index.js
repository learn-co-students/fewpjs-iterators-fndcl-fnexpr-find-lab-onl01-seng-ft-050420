const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winner = arr.find(function(elem) { return elem.result === "W" });
  if (winner) return winner.year;
}