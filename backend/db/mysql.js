const { Sequelize } = require("sequelize");
require("colors");
const modelIdea = require("../models/Idea");
const modelUser = require("../models/User");
const { DATANAME_DB, USE_DB, PASSWORD_DB, HOST_DB } = process.env;

const sequelize = new Sequelize(DATANAME_DB, USE_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: "mysql",
});
const conectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos en linea".brightCyan);
  } catch (error) {
    console.error(`${"Unable to connect to the database".red}:${error}`);
  }
};
conectDB();
//relacion idea usuario
modelIdea(sequelize);
modelUser(sequelize);

const { User, Idea } = sequelize.models;

User.belongsToMany(Idea, { through: "UsuarioIdeas" });
Idea.belongsToMany(User, { through: "UsuarioIdeas" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
