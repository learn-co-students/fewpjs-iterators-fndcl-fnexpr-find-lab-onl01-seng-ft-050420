function superbowlWin(array) {
  let win = array.find((bowl) => bowl.result === 'W')
  return win ? win.year : undefined
}
