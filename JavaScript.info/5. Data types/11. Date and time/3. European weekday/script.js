let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getLocalDay(date));       // tuesday, should show 2

function getLocalDay(date) {
  const worldDay = date.getDay();

  if (worldDay === 0) {
    return 7;
  }

  return worldDay;
}