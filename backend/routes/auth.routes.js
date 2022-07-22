const { Router } = require("express");
const { check } = require("express-validator");
const { checkAuth, validarErros } = require("../middlewares");
const { createUser, loginUser, reNewToken } = require("../controllers");
const { existeEmail, userExiste } = require("../helpers");

const route = Router();

route.post(
  "/register",
  [
    check("name", "Nombre es un campo obligatorio").not().isEmpty(),
    check("name", "El nombre debe de tener mas de 3 letras").isLength({
      min: 3,
    }),
    check("name", "El nombre debe de ser un string").isString(),
    check("email", "El email es un campo obligatorio").not().isEmpty(),
    check("email", "Debe de ser un corre valido").isEmail(),
    check("email").custom(existeEmail),
    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de de tener un largo mayor a 6 y menor a 15"
    ).isLength({ min: 6, max: 15 }),
    validarErros,
  ],
  createUser
);
route.post(
  "/login",
  [
    check("email").custom(userExiste),
    check("email", "El email es un campo obligatorio").not().isEmpty(),
    check("email", "Debe de ser un corre valido").isEmail(),
    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de de tener un largo mayor a 6 y menor a 15"
    ).isLength({ min: 6, max: 15 }),
    validarErros,
  ],
  loginUser
);
route.get("/token", [checkAuth], reNewToken);

module.exports = {
  auth: route,
};
