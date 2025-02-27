console.log(getSecondsToday());

function getSecondsToday() {
  const currDay = new Date();
  const startDay = new Date(currDay.getFullYear(), currDay.getMonth(), currDay.getDate());
  return Math.round((currDay - startDay) / 1000);
}