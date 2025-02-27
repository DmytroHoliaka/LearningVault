console.log(checkSpam('buy ViAgRA now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam("innocent rabbit") === false);

function checkSpam(msg) {
  const spamWords = ['viagra', 'xxx'];
  const lowerMsg = msg.toLowerCase();
  return spamWords.some(w => lowerMsg.includes(w));
}