// stylesheets
import "./style.css";

// components
import Content from "./components/App";

// logic managers
import AnimationManager from "./logic/AnimationManager";
import CanvasManager from "./logic/CanvasManager";
import ControlManager from "./logic/ControlManager";
import state from "./logic/StateManager";

document.body.appendChild(Content());

// initialize single-use-controllers
AnimationManager.applyAnimations();
CanvasManager.updateGridSize();
ControlManager.setGridSize(state.getGridSize());
