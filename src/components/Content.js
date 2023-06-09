import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer/Footer";

const Content = () => {
  const content = Object.assign(
    document.createElement("div", {
      className: "content",
    })
  );

  content.appendChild(Header());
  content.appendChild(Main());
  content.appendChild(Footer());

  return content;
};

export default Content;
