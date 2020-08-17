const testVar = {}

const superbowlWin = array => {
  let winner = array.find( game => game.result ==='W')
  if (winner) {
    return winner.year
  }
}
