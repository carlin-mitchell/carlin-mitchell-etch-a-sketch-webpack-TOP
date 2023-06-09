const appendLoremLines = (parent, numLines) => {
  for (let i = 0; i < numLines; i++) {
    const lorem = Object.assign(document.createElement("div"), {
      innerText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum quasi nemo, officiis assumenda doloremque iure molestiae! Facere atque odio ipsa laudantium nihil alias, sit libero. Tenetur velit voluptatibus quam!",
    });
    parent.appendChild(lorem);
  }
};

export default appendLoremLines;
