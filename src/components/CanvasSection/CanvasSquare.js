const CanvasSquare = (id) => {
  const square = Object.assign(document.createElement("div"), {
    id: `canvas-square-${id}`,
    className: "canvas-square",
  });
  return square;
};

export default CanvasSquare;
