const hashPassword = require("./hasPassword");
const generadorJWT = require("./generadorJWT");
const validarErros = require("./validatorsErros");

module.exports = {
  ...hashPassword,
  ...validarErros,
  ...generadorJWT,
};
