const Range = () => {
  const range = Object.assign(document.createElement("input"), {
    type: "range",
  });

  return range;
};

export default Range;
