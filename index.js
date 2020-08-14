const testVar = {}

function testFunc() {
  return "hi"
}

// const superbowlWin = array => array.find( game => game.result === "W").year

const superbowlWin = array => {
  let winner = array.find( game => game.result === "W")
  if (winner) {
    return winner.year
  } else 
  return undefined
}