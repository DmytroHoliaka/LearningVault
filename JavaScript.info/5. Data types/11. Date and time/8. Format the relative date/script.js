alert(formatDate(new Date(new Date - 1))); // "right now"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

alert(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(requiredDate) {
  const currentDate = new Date();
  const secondsDiff = (currentDate - requiredDate) / 1000;

  const ONE_SECOND = 1;
  const SECONDS_PER_MINUTE = 60 * ONE_SECOND;
  const MINUTES_PER_HOUR = 60 * SECONDS_PER_MINUTE;

  if (secondsDiff < ONE_SECOND) {
    return "right now";
  } else if (secondsDiff < SECONDS_PER_MINUTE) {
    return `${Math.floor(secondsDiff)} sec. ago`;
  } else if (secondsDiff < MINUTES_PER_HOUR) {
    return `${Math.floor(secondsDiff / 60)} min. ago`;
  } else {
    return getStringDateFromSeconds(requiredDate); 
  }
}

function getStringDateFromSeconds(date){
  let year = date.getFullYear().toString().slice(2);
  let month = date.getMonth().toString();
  let day = date.getDay().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  
  month = month.length === 1 ? `0${month}` : month;
  day = day.length === 1 ? `0${day}` : day;
  hours = hours.length === 1 ? `0${hours}` : hours;
  minutes = minutes.length === 1 ? `0${minutes}` : minutes;
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}