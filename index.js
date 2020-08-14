const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

const superBowlWin = (arr) => {
 let result = arr.find( game => { return game.result === "W" })
 return !!result ? result.year : undefined
 
}
