let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return 'MO';
    case 1:
      return 'SU';
    case 2:
      return 'TU';
    case 3:
      return 'WE';
    case 4:
      return 'TH';
    case 5:
      return 'FR';
    case 6:
      return 'SA';
    default:
      return NaN;
  }
}