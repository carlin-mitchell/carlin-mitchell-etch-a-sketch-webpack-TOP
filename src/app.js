// stylesheets
import "./style.css";

// components
import Content from "./components/App";

// logic managers
import AnimationController from "./logic/AnimationController";

document.body.appendChild(Content());

// initialize single-use-controllers
AnimationController();
