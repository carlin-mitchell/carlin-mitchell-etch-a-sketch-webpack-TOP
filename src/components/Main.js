import ControlPanel from "./ControlPanel/ControlPanel";
import GridContainer from "./GridSection/GridContainer";

const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  const div = document.createElement("div");
  div.id = "test";
  main.appendChild(ControlPanel());
  main.appendChild(GridContainer());

  return main;
};

export default Main;
