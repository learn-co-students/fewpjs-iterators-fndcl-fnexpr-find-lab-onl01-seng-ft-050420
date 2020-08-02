const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArr) {
  const winObj = objArr.find(obj => obj.result === 'W');
  return !!winObj ? winObj.year : undefined;
}