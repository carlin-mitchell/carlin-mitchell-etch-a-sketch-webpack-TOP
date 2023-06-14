import ControlIcon from "./ControlIcon/ControlIcon";
import Canvas from "./Canvas";

const CanvasContainer = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "canvas-container",
  });

  container.appendChild(ControlIcon());
  container.appendChild(Canvas());

  return container;
};

export default CanvasContainer;
