const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let game = arr.find(year => year.result === 'W')
  if (game === undefined) {
    return undefined 
  }else {
    return game.year
  }
}
