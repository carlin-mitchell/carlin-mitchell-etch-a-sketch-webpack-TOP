import HideIcon from "./icons/eye-hide.png";

const ExitDiv = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-exit-container",
  });

  const icon = Object.assign(document.createElement("img"), {
    id: "hide-control-panel-icon",
    src: HideIcon,
  });

  container.appendChild(icon);

  return container;
};

export default ExitDiv;
