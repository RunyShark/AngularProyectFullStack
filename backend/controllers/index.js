const auth = require("./autController");
const idea = require("./ideaController");

module.exports = {
  ...auth,
  ...idea,
};
