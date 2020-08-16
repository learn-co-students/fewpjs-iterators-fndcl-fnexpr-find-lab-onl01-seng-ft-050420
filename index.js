const testVar = {}

function testFunc() {
  return "hi"
};

function superbowlWin(arrObjects) {
  let objectWin = arrObjects.find(function(obj) {
    return obj.result === "W"
  });
  if ( objectWin )
    return objectWin.year
}
