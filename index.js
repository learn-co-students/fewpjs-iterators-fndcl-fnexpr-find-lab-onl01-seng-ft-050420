const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winner = record.find(function(s) {
    //let result = s.result === "W"
    //return result
    return s.result === "W"
  })
  if (winner) {
    return winner.year
  }
}