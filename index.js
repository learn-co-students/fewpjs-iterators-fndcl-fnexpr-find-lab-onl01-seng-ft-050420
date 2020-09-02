const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let year = record.find((rec) => {return rec.result === 'W'})
  if (year) return year.year
}
