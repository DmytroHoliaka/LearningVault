console.log(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  const currDateInfo = new Date();
  const secondsInOneDay = 24 * 60 * 60;
  const timeAfterStart = 
      currDateInfo.getHours() * 60 * 60 + 
      currDateInfo.getMinutes() * 60 + 
      currDateInfo.getSeconds();
  
  return secondsInOneDay - timeAfterStart;
}