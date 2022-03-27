export const getBGPositionFromPercent = (val) => {
  switch (val) {
    case 0.25:
      return "33%";
    case 0.5:
      return "66%";
    case 0.75:
      return "100%";
    case 0:
      return "0%";
  }
  return "0%";
};

export function secondsToHms(d) {
  if (d === 0) {
    return "0 sec";
  }
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h === 1 ? " hr, " : " hr, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " min, " : " min, ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? " sec" : " sec") : "";
  return hDisplay + mDisplay + sDisplay;
}

export function shuffleArray(array) {
  const arr = [...array];
  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}
