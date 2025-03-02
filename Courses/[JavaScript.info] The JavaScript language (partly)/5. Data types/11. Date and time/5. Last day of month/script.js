console.log(getLastDayOfMonth(2012, 1)); // leap year => 29

function getLastDayOfMonth(year, month) {
  const dateTime = new Date(year, month + 1, 0);
  return dateTime.getDate();
}