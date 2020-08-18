const testVar = {}

function testFunc() {
  return "hi"
}


superbowlWin = (record) => {
  let outcome = record.find(record => record.result === "W")
  return !!outcome ? outcome.year : undefined
}