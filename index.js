const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
   let t = record.find(r => r.result === "W");
   return t ? t.year : t
}