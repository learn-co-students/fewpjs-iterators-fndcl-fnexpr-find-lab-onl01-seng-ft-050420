

superbowlWin = (array) => {
  let result = array.find((obj) => {
    return obj.result === "W"
  })
  return !!result ? result.year : undefined;
}


