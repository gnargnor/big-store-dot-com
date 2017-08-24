module.exports = (state, emitter) => {
  state.cats = [
    {name: "Moo", id: "moo"},
    {name: "Worm", id: "worm"},
    {name: "Party", id: "party"},
    {name: "Suki", id: "suki"},
    {name: "Ghost of Rufus", id: "rufus"},
    {name: "Sofia", id: "sofia"},
    {name: "Simon", id: "simon"},
  ];

  state.catCart = [];
  state.cat = null;
  state.noDeal = false;
}