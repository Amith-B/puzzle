const initialData = {
  positionMap: Array.from(Array(16).keys()),
  positionPercentMap: [
    { x: 0, y: 0 },
    { x: 0.25, y: 0 },
    { x: 0.5, y: 0 },
    { x: 0.75, y: 0 },
    { x: 0, y: 0.25 },
    { x: 0.25, y: 0.25 },
    { x: 0.5, y: 0.25 },
    { x: 0.75, y: 0.25 },
    { x: 0, y: 0.5 },
    { x: 0.25, y: 0.5 },
    { x: 0.5, y: 0.5 },
    { x: 0.75, y: 0.5 },
    { x: 0, y: 0.75 },
    { x: 0.25, y: 0.75 },
    { x: 0.5, y: 0.75 },
    { x: 0.75, y: 0.75 },
  ],
  images: ["./image1.jpg", "./image2.jpg", "./image3.jpg", undefined],
};

export default initialData;
