export const ratioMap = {
  0: { x: 0, y: 0 },
  1: { x: 0.25, y: 0 },
  2: { x: 0.5, y: 0 },
  3: { x: 0.75, y: 0 },
  4: { x: 0, y: 0.25 },
  5: { x: 0.25, y: 0.25 },
  6: { x: 0.5, y: 0.25 },
  7: { x: 0.75, y: 0.25 },
  8: { x: 0, y: 0.5 },
  9: { x: 0.25, y: 0.5 },
  10: { x: 0.5, y: 0.5 },
  11: { x: 0.75, y: 0.5 },
  12: { x: 0, y: 0.75 },
  13: { x: 0.25, y: 0.75 },
  14: { x: 0.5, y: 0.75 },
  15: { x: 0.75, y: 0.75 },
};

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
