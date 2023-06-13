import ControlPanel from "./ControlPanel/ControlPanel";
import GridSection from "./GridSection/GridSection";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  const div = document.createElement("div");
  div.id = "test";
  main.appendChild(ControlPanel());
  main.appendChild(GridSection());

  return main;
};

export default Main;
