import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer/Footer";

const App = () => {
  const content = Object.assign(document.createElement("div"), {
    id: "app",
  });

  content.appendChild(Header());
  content.appendChild(Main());
  content.appendChild(Footer());

  return content;
};

export default App;
