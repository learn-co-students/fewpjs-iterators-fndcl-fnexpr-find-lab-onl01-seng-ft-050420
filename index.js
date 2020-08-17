const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(records){
  let found = records.find( function(record) { return record['result'] === "W" })
if (found){
return found['year']//record is like the thing in pipes in ruby
//records is an array of objects
}
} //Javascript 30