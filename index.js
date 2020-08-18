function superbowlWin(records) {
  let win = records.find( function(record) { return record.result === 'W' });
  if (win) {
    return win.year;
  }else {
    return undefined;
  }
}
   


