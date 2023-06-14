import ControlPanel from "./ControlPanel/ControlPanel";
import CanvasContainer from "./CanvasSection/CanvasContainer";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  const div = document.createElement("div");
  div.id = "test";
  main.appendChild(ControlPanel());
  main.appendChild(CanvasContainer());

  return main;
};

export default Main;
